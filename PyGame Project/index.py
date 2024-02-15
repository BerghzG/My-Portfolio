import pygame
import function
import math

# Loop principal do jogo
while True:
    # Atualizar a tela
    function.tela.fill(function.BLACK)
    function.draw_lines()

    # Obter os eventos do teclado e do mouse
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    # Obter os estados dos botões do teclado
    keys = pygame.key.get_pressed()

    # Mover a bola
    function.ball_x, function.ball_y, function.ball_vel_x, function.ball_vel_y, function.player_paddle_y, function.computer_paddle_y = function.move_ball(function.ball_x, function.ball_y, function.ball_vel_x,
                                                                                           function.ball_vel_y, function.player_paddle_y,
                                                                                           function.computer_paddle_y)

    # Mover a raquete do jogador
    function.player_paddle_y = function.move_player_paddle(function.player_paddle_y, keys)

    # Mover a raquete do computador
    function.computer_paddle_y = function.move_computer_paddle(function.ball_y, function.computer_paddle_y)

    # Desenhar a bola
    function.draw_ball(function.ball_x, function.ball_y)

    # Desenhar as raquetes
    function.draw_paddles(function.player_paddle_y, function.computer_paddle_y)

    # Desenhar o placar
    function.draw_score(function.player_score, function.computer_score)

    # Limitar a velocidade máxima da bola
    ball_vel_x_sq = function.ball_vel_x * function.ball_vel_x
    ball_vel_y_sq = function.ball_vel_y * function.ball_vel_y
    if ball_vel_x_sq + ball_vel_y_sq > function.MAX_BALL_VEL ** 2:
        function.ball_vel_x = function.ball_vel_x * (function.MAX_BALL_VEL / math.sqrt(ball_vel_x_sq + ball_vel_y_sq))
        function.ball_vel_y = function.ball_vel_y * (function.MAX_BALL_VEL / math.sqrt(ball_vel_x_sq + ball_vel_y_sq))

    # Atualizar a tela
    pygame.display.update()

    # Atrasar o jogo para atingir a velocidade desejada
    function.relogio.tick(60)