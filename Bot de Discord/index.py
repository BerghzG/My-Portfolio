import discord
import random
import asyncio
import sqlite3

intents = discord.Intents.default()
intents.typing = False
intents.presences = False

client = discord.Client(intents=intents)

# Conexão com o banco de dados SQLite
conn = sqlite3.connect('pontuacao.db')
cursor = conn.cursor()

# Criação da tabela de pontos se ela não existir
cursor.execute('''CREATE TABLE IF NOT EXISTS pontos (
                    user_id TEXT PRIMARY KEY,
                    pontos INTEGER DEFAULT 0)''')
conn.commit()

# Função para adicionar pontos diariamente
async def adicionar_pontos():
    while True:
        for guild in client.guilds:
            for member in guild.members:
                cursor.execute('INSERT OR IGNORE INTO pontos (user_id, pontos) VALUES (?, ?)', (str(member.id), 0))
                cursor.execute('UPDATE pontos SET pontos = pontos + ? WHERE user_id = ?', (random.randint(500, 2000), str(member.id)))
                conn.commit()
        await asyncio.sleep(86400)  # Espera 24 horas

# Comando para verificar os pontos
@client.event
async def on_ready():
    print(f'Conectado como {client.user}')
    client.loop.create_task(adicionar_pontos())

# Comando para verificar os pontos
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
            await message.channel.send("Você não tem pontos ainda.")

    # Restante do seu código dos comandos aqui...

client.run('SEU TOKEN')