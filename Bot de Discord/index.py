import discord
import random
import asyncio
import sqlite3
import os

intents = discord.Intents.default()
intents.typing = True
intents.presences = True
intents.members = True

client = discord.Client(intents=intents)

# Conexão com o banco de dados SQLite

conn = sqlite3.connect('pontuacao.db')
cursor = conn.cursor()

# Criação da tabela de pontos se ela não existir

cursor.execute('''CREATE TABLE IF NOT EXISTS pontos (
                    user_id TEXT PRIMARY KEY,
                    pontos INTEGER DEFAULT 0)''')
conn.commit()

# Dicionário de tipos de dragões e seus preços

dragon_prices = {
    1: 15000,
    2: 25000,
    3: 30000,
    4: 30000,
    5: 60000,
    6: 60000,
    7: 80000,
    8: 80000,
    9: 80000,
    10: 150000,
    11: 150000

    # Adicione os demais tipos de dragões e seus preços aqui
}

# Dicionário de nomes dos dragões

dragon_names = {
    1: "Feathered Micro",
    2: "Bioluminescent",
    3: "Acid Spitter",
    4: "Single Crest",
    5: "Blitz Striker",
    6: "Shadow Scale",
    7: "Flame Stalker",
    8: "Inferno Revager",
    9: "Frostfel",
    10: "Nurse Helga",
    11: "Dragern Hybrid"

    # Adicione os demais nomes dos dragões aqui
}

# Função para adicionar pontos diariamente

async def adicionar_pontos():
    while True:
        for guild in client.guilds:
            for member in guild.members:
                cursor.execute('INSERT OR IGNORE INTO pontos (user_id, pontos) VALUES (?, ?)', (str(member.id), 0))
                cursor.execute('UPDATE pontos SET pontos = pontos + ? WHERE user_id = ?', (random.randint(500, 2000), str(member.id)))
                conn.commit()
        await asyncio.sleep(86400)  # Espera 24 horas

# Comando para verificar os pontos e os dragões disponíveis

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!pontos'):
        cursor.execute('SELECT pontos FROM pontos WHERE user_id = ?', (str(message.author.id),))
        row = cursor.fetchone()
        if row:
            await message.channel.send(f"Você tem {row[0]} pontos.")
        else:
            await message.channel.send("Você ainda não tem pontos.")

    elif message.content.startswith('!vender'):
        try:
            _, dragao_num = message.content.split()
            dragao_num = int(dragao_num)
        except ValueError:
            await message.channel.send("Formato incorreto. Use: !vender <número_do_dragão>")
            return
        cursor.execute('SELECT pontos FROM pontos WHERE user_id = ?', (str(message.author.id),))
        row = cursor.fetchone()
        if row:
            if row[0] >= dragon_prices[dragao_num]:
                preco_do_dragao = dragon_prices[dragao_num] // 2  # Calcula o preço de venda (metade do preço original)
                cursor.execute('UPDATE pontos SET pontos = pontos + ? WHERE user_id = ?', (preco_do_dragao, str(message.author.id)))
                conn.commit()
                await message.channel.send(f"Você vendeu o dragão {dragon_names[dragao_num]} por {preco_do_dragao} pontos.")
            else:
                await message.channel.send("Você não tem pontos suficientes para vender esse dragão")     
        else:
            await message.channel.send("Você não tem esse dragão para vender.")

    # Função para comprar dragões com pontos 

    elif message.content.startswith('!comprar'):
        try:
            _, dragao_num = message.content.split()
            dragao_num = int(dragao_num)

            if dragao_num in dragon_prices:
                cursor.execute('SELECT pontos FROM pontos WHERE user_id = ?', (str(message.author.id),))
                row = cursor.fetchone()
                if row and row[0] >= dragon_prices[dragao_num]:
                    cursor.execute('UPDATE pontos SET pontos = pontos - ? WHERE user_id = ?', (dragon_prices[dragao_num], str(message.author.id)))
                    conn.commit()
                    await message.channel.send(f"Você comprou o dragão {dragon_names[dragao_num]} por {dragon_prices[dragao_num]} pontos.")
                else:
                    await message.channel.send("Você não tem pontos suficientes para comprar esse dragão.")
            else:
                await message.channel.send("Esse tipo de dragão não existe ou não está à venda.")
        except ValueError:
            await message.channel.send("Formato incorreto. Use: `!comprar <número_do_dragão>`")

    # Envio de mensagens dos ADMINS
    elif message.content.startswith('!enviar_mensagem'):
        # Verifica se o autor é um administrador

        if message.author.guild_permissions.administrator:
            await message.channel.send("Digite a mensagem que deseja enviar para todos os membros:")
            try:
                # Aguarda resposta do ADMIN
                response = await client.wait_for('message', timeout = 30, check = lambda m: m.author == message.author)
                # Enviar mensagem personalizada para todos

                for member in message.guild.members:
                    await member.send(response.content)
                await message.channel.send("Mensagem enviada com sucesso para todos os membros!")
            except asyncio.TimeoutError:
                await message.channel.send("Tempo esgotado. Tente novamente mais tarde.")
    elif message.content.startswith('!dragons'): 
        dragons_message = "Dragões disponíveis:\n\n"
        for dragao_num, dragao_nome in dragon_names.items():
            dragons_message += f"{dragao_num}: {dragao_nome} - {dragon_prices[dragao_num]} pontos\n" 
        await message.channel.send(dragons_message)
            
# Inicializa o bot com o token

client.run('YOUR TOKEN')
