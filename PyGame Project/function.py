import pygame
import random

# Inicializar o pygame
pygame.init()

# Definir constantes
LARGURA = 800
ALTURA = 600
PADDLE_WIDTH = 20
PADDLE_HEIGHT = 100
BALL_SIZE = 20
MAX_BALL_VEL = 10

# Cores
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Criar a tela
tela = pygame.display.set_mode((LARGURA, ALTURA))
pygame.display.set_caption('Pong')

# Criar o relógio
relogio = pygame.time.Clock()

# Inicializar as posições e velocidades
ball_x = LARGURA // 2
ball_y = ALTURA // 2
ball_vel_x = random.choice([-1, 1]) * MAX_BALL_VEL
ball_vel_y = random.choice([-1, 1]) * MAX_BALL_VEL
player_paddle_y = ALTURA // 2 - PADDLE_HEIGHT // 2
computer_paddle_y = ALTURA // 2 - PADDLE_HEIGHT // 2


# Função para mover a bola
def move_ball(ball_x, ball_y, ball_vel_x, ball_vel_y, player_paddle_y, computer_paddle_y):
    global player_score, computer_score

    # Mover a bola
    ball_x += ball_vel_x
    ball_y += ball_vel_y

    # Verificar colisões com as paredes
    if ball_y <= 0 or ball_y >= ALTURA - BALL_SIZE:
        ball_vel_y = -ball_vel_y
    if ball_x <= 0 or ball_x >= LARGURA - BALL_SIZE:
        ball_vel_x = -ball_vel_x
        if ball_x <= 0:
            player_score += 1
        else:
            computer_score += 1

    # Verificar colisões com as raquetes
    if ball_x <= PADDLE_WIDTH + BALL_SIZE and ball_y >= player_paddle_y and ball_y <= player_paddle_y + PADDLE_HEIGHT:
        ball_x = PADDLE_WIDTH + BALL_SIZE # Mover a bola para fora da raquete do jogador
        ball_vel_x = -ball_vel_x
    if ball_x >= LARGURA - PADDLE_WIDTH - BALL_SIZE and ball_y >= computer_paddle_y and ball_y <= computer_paddle_y + PADDLE_HEIGHT:
        ball_x = LARGURA - PADDLE_WIDTH - BALL_SIZE - BALL_SIZE # mover a bola para fora da raquete do pc
        ball_vel_x = -ball_vel_x

    return ball_x, ball_y, ball_vel_x, ball_vel_y, player_paddle_y, computer_paddle_y


# Função para mover a raquete do jogador
def move_player_paddle(player_paddle_y, keys):
    if keys[pygame.K_UP] and player_paddle_y > 0:
        player_paddle_y -= 5
    if keys[pygame.K_DOWN] and player_paddle_y < ALTURA - PADDLE_HEIGHT:
        player_paddle_y += 5
    return player_paddle_y


# Função para mover a raquete do computador
def move_computer_paddle(ball_y, computer_paddle_y):
    if computer_paddle_y + PADDLE_HEIGHT // 2 < ball_y:
        computer_paddle_y += 5
    if computer_paddle_y + PADDLE_HEIGHT // 2 > ball_y:
        computer_paddle_y -= 5
    return computer_paddle_y


# Função para desenhar a bola
def draw_ball(x, y):
    pygame.draw.rect(tela, WHITE, (x, y, BALL_SIZE, BALL_SIZE))


# Função para desenhar as raquetes
def draw_paddles(player_paddle_y, computer_paddle_y):
    pygame.draw.rect(tela, WHITE, (0, player_paddle_y, PADDLE_WIDTH, PADDLE_HEIGHT))
    pygame.draw.rect(tela, WHITE, (LARGURA - PADDLE_WIDTH, computer_paddle_y, PADDLE_WIDTH, PADDLE_HEIGHT))


# Função para desenhar as linhas de borda
def draw_lines():
    pygame.draw.line(tela, WHITE, (LARGURA // 2, 0), (LARGURA // 2, ALTURA), 5)
   # pygame.draw.line(tela, WHITE, (0, ALTURA // 2), (LARGURA, ALTURA // 2), 5)


# Função para desenhar o placar
def draw_score(player_score, computer_score):
    font = pygame.font.Font(None, 36)
    text = font.render(f'PLAYER: {computer_score}', True, WHITE)
    tela.blit(text, (LARGURA // 2 - 170, 20))
    text = font.render(f'COMPUTER: {player_score}', True, WHITE)
    tela.blit(text, (LARGURA // 2 + 45, 20))


# Variáveis para o placar
player_score = 0
computer_score = 0
