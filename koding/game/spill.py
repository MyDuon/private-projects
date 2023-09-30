# first game from scratch
import pygame
from pygame.constants import K_UP

# initialize the pygame
pygame.init()

# create the screen
screen = pygame.display.set_mode((800, 600))

# background
#background = pygame.image.load("background.png").convert()

# scale background

#background = pygame.transform.scale(background, (800, 600))

# draw rectangle
pygame.draw.rect(screen, (0, 0, 0), (30, 30, 60, 60))

# title and icon
pygame.display.set_caption("Game")
icon = pygame.image.load("controller.png").convert()
pygame.display.set_icon(icon)

# circle
circleX = 100
circleY = 480
circleX_change = 0
circleY_change = 0

# create circle
class circle:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.circleX_change = 0
        self.circleY_change = 0

    def drawCircle(self):
        pygame.draw.circle(screen, (0, 0, 0), (self.x, self.y), 20 )

    def moveCircle(self):
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                self.circleX_change = -5

            if event.key == pygame.K_RIGHT:
                self.circleX_change = 5

            if event.key == pygame.K_UP:
                self.circleY_change = -5

        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                self.circleX_change = 0
            if event.key == pygame.K_UP:
                self.circleY_change = 10

# check if circle is jumping or not
#isJumping = False

# frames of performance of the game
FPS = 60
clock = pygame.time.Clock()

# game looop
running = True
while running:
    clock.tick(FPS)

    # background image
    #screen.blit(background, (0, 0))

    screen.fill((255, 255, 255))
    
    pygame.draw.rect(screen, (0, 0, 0), (0, 500, 800, 150))
    left = 700
    top = 20
    width, height = 30, 30
    for element in range(15):
        left -= 30
        top += 30
        pygame.draw.rect(screen, (0, 0, 0), (left, top, width, height))
    

    #pygame.draw.rect(screen, (255, 0, 0), (100, 470, 30, 30))
    #screen.blit((0, 0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                circleX_change = -5

            if event.key == pygame.K_RIGHT:
                circleX_change = 5

            if event.key == pygame.K_UP:
                circleY_change = -5

        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                circleX_change = 0
            if event.key == pygame.K_UP:
                circleY_change = 10

    # circles left and right movement
    circleX += circleX_change

    # circle up movement
    circleY += circleY_change

    # checking for boundaries of circle so it doesnt go out of bounds on left and right side
    if circleX <= 20:
        circleX = 20
    if circleX >= 780:
        circleX = 780
    # checking for boundaries of circle so it doesnt go out of bounds on top of the screen
    if circleY <= 0:
        circleY = 20
    # checking for boundaries of circle so it doesnt go out of bounds on bottom of the screen


    player = circle(circleX, circleY)
    player.drawCircle()
    player.moveCircle()

    pygame.display.update()