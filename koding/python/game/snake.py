from types import ClassMethodDescriptorType
import pygame
import random
import sys
from pygame.math import Vector2
import time
import signal

pygame.init()

# the game resolution
cell_size, cell_number = 40, 20
screen = pygame.display.set_mode((cell_size*cell_number, cell_size*cell_number))
pygame.display.set_caption("Snake")
clock = pygame.time.Clock()
class Fruit:
    def __init__(self):
        self.randomize()

    def draw_fruit(self):
        fruit_rect = pygame.Rect(self.x * cell_size, self.y * cell_size, cell_size, cell_size)
        screen.blit(apple, fruit_rect)
        #pygame.draw.rect(screen, (123, 0, 0), fruit_rect)

    def randomize(self):
        self.x = random.randint(0, cell_number - 1)
        self.y = random.randint(0, cell_number - 1)
        self.pos = [self.x, self.y]

class Snake:
    def __init__(self):
        self.body = [Vector2(5, 10), Vector2(4, 10), Vector2(3, 10)]
        self.direction = Vector2(1, 0)
        self.new_block = False

    def draw_snake(self):
        for block in self.body:
            x_pos = block[0] * cell_size
            y_pos = block[1] * cell_size
            block_rect = pygame.Rect(x_pos, y_pos, cell_size, cell_size)
            pygame.draw.rect(screen, (183, 111, 122), block_rect)

    def move_snake(self):
        # print(len(self.body))
        if self.new_block == True:
            body_copy = self.body[:]
            body_copy.insert(0, body_copy[0] + self.direction)
            self.body = body_copy[:]
            self.new_block = False
        else:
            body_copy = self.body[:-1]
            body_copy.insert(0, body_copy[0] + self.direction)
            self.body = body_copy[:]

    def add_block(self):
        self.new_block = True

class Main:
    def __init__(self):
        self.snake = Snake()
        self.fruit = Fruit()

    def update(self):
        self.snake.move_snake()
        self.check_collision()
        self.check_fail()

    def draw_element(self):
        self.fruit.draw_fruit()
        self.snake.draw_snake()

    def check_collision(self):
        if self.fruit.pos == self.snake.body[0]:
            self.fruit.randomize()
            self.snake.add_block()

    def check_fail(self):
        if not 0 <= self.snake.body[0].x < cell_number or not 0 <= self.snake.body[0].y < cell_number:
            self.game_over()

        for block in self.snake.body[1:]:
            if block == self.snake.body[0]:
                print(block)

                self.game_over()

    def game_over(self):
        pygame.quit()
        sys.exit()

SCREEN_UPDATE = pygame.USEREVENT
# triggered every 150 ms
pygame.time.set_timer(SCREEN_UPDATE, 150)
apple = pygame.image.load('apple.png').convert_alpha()
main_game = Main()

signal.signal(signal.SIGINT, main_game.game_over)

while True:

    screen.fill((255, 255, 255))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

        if event.type == SCREEN_UPDATE:
            main_game.update()

        if event.type == pygame.KEYDOWN and event.key == pygame.K_LEFT:
            print("LEFT")
            if main_game.snake.direction.x != 1:
                main_game.snake.direction = Vector2(-1, 0)
        elif event.type == pygame.KEYDOWN and event.key == pygame.K_RIGHT:
            print("Right")
            if main_game.snake.direction.x != -1:
                main_game.snake.direction = Vector2(1, 0)
        elif event.type == pygame.KEYDOWN and event.key == pygame.K_UP:
            if main_game.snake.direction.y != 1:
                main_game.snake.direction = Vector2(0, -1)
        elif event.type == pygame.KEYDOWN and event.key == pygame.K_DOWN:
            if main_game.snake.direction.y != -1:
                main_game.snake.direction = Vector2(0, 1)

    screen.fill((175, 215, 70))
    main_game.draw_element()
    pygame.display.update()
    clock.tick(60)