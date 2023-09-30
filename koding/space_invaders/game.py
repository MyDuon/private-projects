#game
"""
import pygame

#importerer innebygde constanter som knapper
from pygame.locals import (
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
    QUIT,
)

#initierer spillet
pygame.init()

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

running = True
while running:
    for event in pygame.event.get():
        if event.type == KEYDOWN:
            if event.key == K_ESCAPE:
                running = False
        elif event.type == QUIT:
            running = False

# Fill the screen with white
screen.fill((255, 255, 255))

# Create a surface and pass in a tuple containing its
surf = pygame.Surface((50, 50))

surf.fill((0, 0, 0))
rect = surf.get_rect()

screen.blit(surf, (SCREEN_WIDTH/2, SCREEN_HEIGHT/2))
pygame.display.flip()
"""