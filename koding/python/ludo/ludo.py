import secrets
from tkinter.tix import Tree
import pygame, sys
from pygame.math import Vector2
import random
pygame.init()
size, rows = 825, 15
screen = pygame.display.set_mode((size, size))
pygame.display.set_caption("Ludo")

# Color used
RED_COLOR = (235, 28, 36)
GREEN_COLOR = (2, 160, 75)
BLUE_COLOR = (34, 64, 154)
YELLOW_COLOR = (255, 224, 19)
WHITE_COLOR = (255, 255, 255)
BLACK_COLOR = (0, 0, 0)

# Tile sizes
HALF_TILE_WIDTH = size/rows/2
TILE_WIDTH = size/rows

class Board:
    def __init__(self, size):
        self.size = size
        self.rows = 15
        self.white_path = [
            Vector2(HALF_TILE_WIDTH, HALF_TILE_WIDTH + TILE_WIDTH * 6),                             # 1
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH, HALF_TILE_WIDTH + TILE_WIDTH * 6),                # 2
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 2, HALF_TILE_WIDTH + TILE_WIDTH * 6),            # 3
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 3, HALF_TILE_WIDTH + TILE_WIDTH * 6),            # 4
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 4, HALF_TILE_WIDTH + TILE_WIDTH * 6),            # 5
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 5, HALF_TILE_WIDTH + TILE_WIDTH * 6),            # 6
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 5),            # 7
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 4),            # 8
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 3),            # 9
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 2),            # 10
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 1),            # 11
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH),                             # 12
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH),                             # 13
            
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH),                             # 14
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 1),            # 15
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 2),            # 16
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 3),            # 17
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 4),            # 18
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 5),            # 19
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 9, HALF_TILE_WIDTH + TILE_WIDTH * 6),            # 20
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 10, HALF_TILE_WIDTH + TILE_WIDTH * 6),           # 21
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 11, HALF_TILE_WIDTH + TILE_WIDTH * 6),           # 22
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 12, HALF_TILE_WIDTH + TILE_WIDTH * 6),           # 23
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 13, HALF_TILE_WIDTH + TILE_WIDTH * 6),           # 24
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 14, HALF_TILE_WIDTH + TILE_WIDTH * 6),           # 25
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 14, HALF_TILE_WIDTH + TILE_WIDTH * 7),           # 26
            
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 14, HALF_TILE_WIDTH + TILE_WIDTH * 8),           # 27
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 13, HALF_TILE_WIDTH + TILE_WIDTH * 8),           # 28
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 12, HALF_TILE_WIDTH + TILE_WIDTH * 8),           # 29
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 11, HALF_TILE_WIDTH + TILE_WIDTH * 8),           # 30
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 10, HALF_TILE_WIDTH + TILE_WIDTH * 8),           # 31
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 9, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 32
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 9),            # 33
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 10),           # 34
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 11),           # 35
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 12),           # 36
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 13),           # 37
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 8, HALF_TILE_WIDTH + TILE_WIDTH * 14),           # 38
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 14),           # 39
            
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 14),           # 40
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 13),           # 41
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 12),           # 42
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 11),           # 43
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 10),           # 44
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 6, HALF_TILE_WIDTH + TILE_WIDTH * 9),            # 45
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 5, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 46
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 4, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 47
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 3, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 48
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 2, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 49
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 1, HALF_TILE_WIDTH + TILE_WIDTH * 8),            # 50
            Vector2(HALF_TILE_WIDTH, HALF_TILE_WIDTH + TILE_WIDTH * 8),                             # 51
            Vector2(HALF_TILE_WIDTH, HALF_TILE_WIDTH + TILE_WIDTH * 7),                             # 52
        ]
        self.red_path = [
            Vector2(-1, -1),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 2, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 3, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 4, HALF_TILE_WIDTH + TILE_WIDTH * 7), 
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 5, HALF_TILE_WIDTH + TILE_WIDTH * 7)
        ]
        self.blue_path = [
            Vector2(-1, -1),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 13),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 12),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 11),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 10),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 19)
        ]
        self.yellow_path = [
            Vector2(-1, -1),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 2),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 3),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 4),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 7, HALF_TILE_WIDTH + TILE_WIDTH * 5),
        ]
        self.green_path = [
            Vector2(-1, -1),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 13, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 12, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 11, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 10, HALF_TILE_WIDTH + TILE_WIDTH * 7),
            Vector2(HALF_TILE_WIDTH + TILE_WIDTH * 9, HALF_TILE_WIDTH + TILE_WIDTH * 7)
        ]

    def draw_board(self):
        self.x = 0
        self.y = 0
        
        self.draw_red_path()
        self.draw_blue_path()
        self.draw_yellow_path()
        self.draw_green_path()
        
        # drawing grid
        for line in range(self.rows):
            self.x += TILE_WIDTH
            self.y += TILE_WIDTH

            pygame.draw.line(screen, (0, 0, 0), (self.x, 0), (self.x, self.size))
            
            pygame.draw.line(screen, (0, 0, 0), (0, self.y), (self.size, self.y))
            
        self.draw_red_triangle()
        self.draw_blue_triangle()
        self.draw_yellow_triangle()
        self.draw_green_triangle()
        
        self.draw_red_platform()
        self.draw_blue_platform()
        self.draw_yellow_platform()
        self.draw_green_platform()

    def draw_red_platform(self):
        # draw big red square
        red_rect = pygame.Rect(0, 0, TILE_WIDTH * 6, TILE_WIDTH * 6)
        pygame.draw.rect(screen, RED_COLOR, red_rect)

        # drawing circle, top left, top right, bottom left, bottom right
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4, TILE_WIDTH*6/4), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3, TILE_WIDTH*6/4), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4, TILE_WIDTH*6/4*3), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3, TILE_WIDTH*6/4*3), TILE_WIDTH)

    def draw_red_path(self):
        # drawing squares to make a path
        square_path = pygame.Rect(TILE_WIDTH, TILE_WIDTH * 6, TILE_WIDTH, TILE_WIDTH)
        rect_path = pygame.Rect(TILE_WIDTH, TILE_WIDTH * 7, TILE_WIDTH * 5, TILE_WIDTH)
        pygame.draw.rect(screen, RED_COLOR, square_path)
        pygame.draw.rect(screen, RED_COLOR, rect_path)
    
    def draw_red_triangle(self):
        # Drawing triangle
        pygame.draw.polygon(screen, RED_COLOR, ((TILE_WIDTH * 6, TILE_WIDTH * 6), (TILE_WIDTH * 6, TILE_WIDTH * 9), (TILE_WIDTH * 7 + HALF_TILE_WIDTH, TILE_WIDTH * 7 + HALF_TILE_WIDTH)))
        
        # Drawing triangle stroke
        pygame.draw.line(screen, BLACK_COLOR, (TILE_WIDTH * 6, TILE_WIDTH * 6), (TILE_WIDTH * 6, TILE_WIDTH * 9), 2)

    def draw_blue_platform(self):
        # draw big blue square
        blue_board = pygame.Rect(0, TILE_WIDTH * 9, TILE_WIDTH * 6, TILE_WIDTH * 6)
        pygame.draw.rect(screen, BLUE_COLOR, blue_board)

        # drawing circle, top left, top right, bottom left, bottom right
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4, TILE_WIDTH*6/4+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3, TILE_WIDTH*6/4+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4, TILE_WIDTH*6/4*3+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3, TILE_WIDTH*6/4*3+TILE_WIDTH*9), TILE_WIDTH)

    def draw_blue_path(self):
        # drawing squares to make a path
        square_path = pygame.Rect(TILE_WIDTH * 6, TILE_WIDTH * 13, TILE_WIDTH, TILE_WIDTH)
        rect_path = pygame.Rect(TILE_WIDTH * 7, TILE_WIDTH * 9, TILE_WIDTH, TILE_WIDTH * 5)
        pygame.draw.rect(screen, BLUE_COLOR, square_path)
        pygame.draw.rect(screen, BLUE_COLOR, rect_path)
       
    def draw_blue_triangle(self): 
        # Drawing triangle
        pygame.draw.polygon(screen, BLUE_COLOR, ((TILE_WIDTH * 6, TILE_WIDTH * 9), (TILE_WIDTH * 7 + HALF_TILE_WIDTH, TILE_WIDTH * 7 + HALF_TILE_WIDTH), (TILE_WIDTH * 9, TILE_WIDTH * 9)))
        
        # Drawing triangle stroke
        pygame.draw.line(screen, BLACK_COLOR, (TILE_WIDTH * 6, TILE_WIDTH * 9), (TILE_WIDTH * 9, TILE_WIDTH * 9), 2)

    def draw_yellow_platform(self):
        # draw big yellow square
        yellow_rect = pygame.Rect(TILE_WIDTH * 9, 0, TILE_WIDTH * 6, TILE_WIDTH * 6)
        pygame.draw.rect(screen, YELLOW_COLOR, yellow_rect)

        # drawing circle, top left, top right, bottom left, bottom right
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4+TILE_WIDTH*9, TILE_WIDTH*6/4), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3+TILE_WIDTH*9, TILE_WIDTH*6/4), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4+TILE_WIDTH*9, TILE_WIDTH*6/4*3), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3+TILE_WIDTH*9, TILE_WIDTH*6/4*3), TILE_WIDTH)

    def draw_yellow_path(self):
        # drawing squares to make a path
        square_path = pygame.Rect(TILE_WIDTH*8, TILE_WIDTH, TILE_WIDTH, TILE_WIDTH)
        rect_path = pygame.Rect(TILE_WIDTH*7, TILE_WIDTH, TILE_WIDTH, TILE_WIDTH*5)
        pygame.draw.rect(screen, YELLOW_COLOR, square_path)
        pygame.draw.rect(screen, YELLOW_COLOR, rect_path)
        
    def draw_yellow_triangle(self):
        # Drawing triangle
        pygame.draw.polygon(screen, YELLOW_COLOR, ((TILE_WIDTH * 6, TILE_WIDTH * 6), (TILE_WIDTH * 9, TILE_WIDTH * 6), (TILE_WIDTH * 7 + HALF_TILE_WIDTH, TILE_WIDTH * 7 + HALF_TILE_WIDTH)))
        
        # Drawing triangle stroke
        pygame.draw.line(screen, BLACK_COLOR, (TILE_WIDTH * 6, TILE_WIDTH * 6), (TILE_WIDTH * 9, TILE_WIDTH * 6), 2)

    def draw_green_platform(self):
        # draw big green square
        green_rect = pygame.Rect(TILE_WIDTH * 9, TILE_WIDTH * 9, TILE_WIDTH * 6, TILE_WIDTH * 6)
        pygame.draw.rect(screen, GREEN_COLOR, green_rect)

        # drawing circle, top left, top right, bottom left, bottom right
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4+TILE_WIDTH*9, TILE_WIDTH*6/4+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3+TILE_WIDTH*9, TILE_WIDTH*6/4+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4+TILE_WIDTH*9, TILE_WIDTH*6/4*3+TILE_WIDTH*9), TILE_WIDTH)
        pygame.draw.circle(screen, WHITE_COLOR, (TILE_WIDTH*6/4*3+TILE_WIDTH*9, TILE_WIDTH*6/4*3+TILE_WIDTH*9), TILE_WIDTH)

    def draw_green_path(self):
        # drawing squares to make a path
        square_path = pygame.Rect(TILE_WIDTH*13, TILE_WIDTH * 8, TILE_WIDTH, TILE_WIDTH)
        rect_path = pygame.Rect(TILE_WIDTH*9, TILE_WIDTH * 7, TILE_WIDTH * 5, TILE_WIDTH)
        pygame.draw.rect(screen, GREEN_COLOR, square_path)
        pygame.draw.rect(screen, GREEN_COLOR, rect_path)
        
    def draw_green_triangle(self):
        # Drawing triangle
        pygame.draw.polygon(screen, GREEN_COLOR, ((TILE_WIDTH * 9, TILE_WIDTH * 6), (TILE_WIDTH * 7 + HALF_TILE_WIDTH, TILE_WIDTH * 7 + HALF_TILE_WIDTH), (TILE_WIDTH * 9, TILE_WIDTH * 9)))
        
        # Drawing triangle stroke
        pygame.draw.line(screen, BLACK_COLOR, (TILE_WIDTH * 9, TILE_WIDTH * 6), (TILE_WIDTH * 9, TILE_WIDTH * 9), 2)
    
class Dice:
    def __init__(self):
        self.dice = None

    def roll_dice(self):
        # randomize number from 1 to 6
        self.dice = random.randint(1, 6)
        # self.dice = 1
        print(self.dice)
        return self.dice
        
class Redplayer:
    def __init__(self, board):
        # order for the players: top left, top right, bottom left, bottom right
        self.game_piece1 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH), (HALF_TILE_WIDTH + TILE_WIDTH))
        self.game_piece2 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*4), (HALF_TILE_WIDTH + TILE_WIDTH))
        self.game_piece3 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH), (HALF_TILE_WIDTH + TILE_WIDTH*4))
        self.game_piece4 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*4), (HALF_TILE_WIDTH + TILE_WIDTH*4))
        self.board = board
        self.index = 0

    def draw_game_piece(self):
        # drawing game piece in order: top left, top right, bottom left, bottom right
        pygame.draw.circle(screen, (235-30, 28+10, 36), (self.game_piece1.x, self.game_piece1.y), 15)
        pygame.draw.circle(screen, (235-30, 28+10, 36), (self.game_piece2.x, self.game_piece2.y), 15)
        pygame.draw.circle(screen, (235-30, 28+10, 36), (self.game_piece3.x, self.game_piece3.y), 15)
        pygame.draw.circle(screen, (235-30, 28+10, 36), (self.game_piece4.x, self.game_piece4.y), 15)

    def move_game_piece(self, diceNum):
        self.index += diceNum
        
        if self.index > 51:
            self.red_path_index = self.index-51
            self.game_piece1 = self.board.red_path[self.red_path_index]
            return
            
        self.game_piece1 = self.board.white_path[self.index]
                  
    def game_piece_on_board(self):
        pass
        
class Blueplayer:
    def __init__(self, board):
        # order for the players: top left, top right, bottom left, bottom right
        self.game_piece1 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH), (HALF_TILE_WIDTH + TILE_WIDTH*10))
        self.game_piece2 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*4), (HALF_TILE_WIDTH + TILE_WIDTH*10))
        self.game_piece3 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH), (HALF_TILE_WIDTH + TILE_WIDTH*13))
        self.game_piece4 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*4), (HALF_TILE_WIDTH + TILE_WIDTH*13))
        self.board = board
        self.index = 39
        self.blue_path_activated = False
        
    def draw_game_piece(self):
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece1.x, self.game_piece1.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece2.x, self.game_piece2.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece3.x, self.game_piece3.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece4.x, self.game_piece4.y), 15)
        
    def move_game_piece(self, diceNum):
        self.index += diceNum
        
        # Reset the index after index 51
        if self.index > 51 and self.blue_path_activated == False:
            # resetting the index
            self.index = self.index-52
            self.game_piece1 = self.board.white_path[self.index]
            self.blue_path_activated = True
            return
        
        # move inside the blue path
        if (51 > self.index) and (self.index > 38) and (self.blue_path_activated == True):
            self.blue_path_index = self.index-38
            self.game_piece1 = self.board.blue_path[self.blue_path_index]
            return
        
        # move player
        self.game_piece1 = self.board.white_path[self.index]

class Yellowplayer:
    def __init__(self, board):
        # order for the players: top left, top right, bottom left, bottom right
        self.game_piece1 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*10), (HALF_TILE_WIDTH + TILE_WIDTH))
        self.game_piece2 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH)*9, (HALF_TILE_WIDTH + TILE_WIDTH))
        self.game_piece3 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*10), (HALF_TILE_WIDTH + TILE_WIDTH*4))
        self.game_piece4 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH)*9, (HALF_TILE_WIDTH + TILE_WIDTH*4))
        self.board = board
        self.index = 13
        self.yellow_path_activated = False

    def draw_game_piece(self):
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece1.x, self.game_piece1.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece2.x, self.game_piece2.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece3.x, self.game_piece3.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece4.x, self.game_piece4.y), 15)
        
    def move_game_piece(self, diceNum):
        self.index += diceNum
        
        # Reset the index after index 51
        if self.index > 51 and self.yellow_path_activated == False:
            # resetting the index
            self.index = self.index-52
            self.game_piece1 = self.board.white_path[self.index]
            self.yellow_path_activated = True
            return
        
        # move inside the yellow path
        if (51 > self.index) and (self.index > 12) and (self.yellow_path_activated == True):
            self.yellow_path_index = self.index-12
            self.game_piece1 = self.board.yellow_path[self.yellow_path_index]
            return
        
        # move player
        self.game_piece1 = self.board.white_path[self.index]

class Greenplayer:
    def __init__(self, board):
        # order for the players: top left, top right, bottom left, bottom right
        self.game_piece1 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*10), (HALF_TILE_WIDTH + TILE_WIDTH*10))
        self.game_piece2 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*13), (HALF_TILE_WIDTH + TILE_WIDTH*10))
        self.game_piece3 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*10), (HALF_TILE_WIDTH + TILE_WIDTH*13))
        self.game_piece4 = Vector2((HALF_TILE_WIDTH + TILE_WIDTH*13), (HALF_TILE_WIDTH + TILE_WIDTH*13))
        self.board = board
        self.index = 26
        self.green_path_activated = False

    def draw_game_piece(self):
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece1.x, self.game_piece1.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece2.x, self.game_piece2.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece3.x, self.game_piece3.y), 15)
        pygame.draw.circle(screen, BLACK_COLOR, (self.game_piece4.x, self.game_piece4.y), 15)
        
    def move_game_piece(self, diceNum):
        self.index += diceNum
        
        # Reset the index after index 51
        if self.index > 51 and self.green_path_activated == False:
            # resetting the index
            self.index = self.index-52
            self.game_piece1 = self.board.white_path[self.index]
            self.green_path_activated = True
            return
        
        # move inside the green path
        if (51 > self.index) and (self.index > 25) and (self.green_path_activated == True):
            self.green_path_index = self.index-25
            self.game_piece1 = self.board.green_path[self.green_path_index]
            return
        
        # move player
        self.game_piece1 = self.board.white_path[self.index]

ludo_board = Board(size)
redplayer = Redplayer(ludo_board)
blueplayer = Blueplayer(ludo_board)
yellowplayer = Yellowplayer(ludo_board)
greenplayer = Greenplayer(ludo_board)
dice = Dice()
redPlayerMoved = False
bluePlayerMoved = False
yellowPlayerMoved = False
greenPlayerMoved = False
def main():
    number = 0
    while True:
        screen.fill((255, 255, 255))
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    diceNum = dice.roll_dice()
                    
                    if number == 0:
                        redplayer.move_game_piece(diceNum)
                    elif number == 1:
                        blueplayer.move_game_piece(diceNum)
                        print("går den inn her")
                    elif number == 2:
                        yellowplayer.move_game_piece(diceNum)
                    elif number == 3:
                        greenplayer.move_game_piece(diceNum)
                        number = -1
                    number += 1
                    print("hei", number) 
                    
                if event.key == pygame.K_RIGHT:
                    pass

        ludo_board.draw_board()
        redplayer.draw_game_piece()
        blueplayer.draw_game_piece()
        yellowplayer.draw_game_piece()
        greenplayer.draw_game_piece()
        pygame.display.update()
main()