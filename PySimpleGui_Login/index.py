# Login e Senha

import PySimpleGUI as Sg

# Usuários e senhas cadastrados
usuarios_senhas = [['Robert', '123456']]

# Calcula o numero de usuarios cadastrados
num_usuarios = len(usuarios_senhas)

# layout
Sg.theme('DarkBlue3')
layout = [
    [Sg.Text('Usuário'), Sg.Input(key='usuario')],
    [Sg.Text('Senha'), Sg.Input(key='senha', password_char='*')],
    [Sg.Checkbox('Salvar o login?')],
    [Sg.Button('Entrar'), Sg.Button('Cadastrar'), Sg.Button('Mostrar Usuários')]
]
# janela
janela = Sg.Window('Tela de Login', layout)
# Ler os eventos
while True:
    eventos, valores = janela.read()
    if eventos == Sg.WINDOW_CLOSED:
        break
    elif eventos == 'Entrar':
        if [valores['usuario'], valores['senha']] in usuarios_senhas:
            print('Bem vindo(a) {}!'.format(valores['usuario']))
            Sg.popup('Bem vindo(a) {}!'.format(valores['usuario']))
        else:
            Sg.popup('Usuário ou senha incorretos!')
    elif eventos == 'Cadastrar':
        if [valores['usuario'], valores['senha']] not in usuarios_senhas:
            usuarios_senhas.append([valores['usuario'], valores['senha']])
            Sg.popup('Usuário cadastrado com sucesso!')
        else:
            Sg.popup('Usuário já cadastrado!')
    elif eventos == 'Mostrar Usuários':
        usuarios = '\n'.join(usuario[0] for usuario in usuarios_senhas)
        total_usuarios = len(usuarios_senhas)
        Sg.popup('Usuários Cadastrados:\n{}'.format(usuarios))