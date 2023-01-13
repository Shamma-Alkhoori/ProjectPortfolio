import random 

# Determine the resolutions of board 200*400

WIDTH= 200
HEIGHT= 400

# Row and Columns of board

The_Row=20
The_Col=10
Board= []

# A list for all color ranges (red-blue-green-yellow-purple-white-black)

List_Colors= [[255,51,52],
              [12,150,228],
              [30,183,66],
              [246,187,0],
              [76,0,153],
              [255,255,255],
              [0,0,0]]

# Creating our first class for the blocks 

class Blocks:
    # print("In block")
    def __init__(self):
        self.colors= random.randint(0,6)
        self.height=20
        self.width=20
        self.x= random.randint(0,The_Col -1)*20
        self.y=0
        self.key_handler= {LEFT:False, RIGHT:False}
        self.no_move = False # True means the current block is still moving, False means it has stopped
        while board[0][self.x/20] == 1:
            self.x= random.randint(0,The_Col -1)*20
        
# create a function to display the blocks
    def display(self):
        self.update()
        
        fill(List_Colors[self.colors][0], List_Colors[self.colors][1], List_Colors[self.colors][2])
        rect(self.x,self.y,self.height,self.width)
        
# update makes the blocks shift down and prevents overlapping
    def update(self):
      
        if self.y + 20 <=380 and board[(self.y + 20)/20][self.x/20] == 0: 
            self.y+= 20


# this if function calls a new block when a block has landed
        if self.y == 380 and board[(self.y)/20][self.x/20] == 0:
            self.no_move = False
            self.key_handler= {LEFT:False, RIGHT:False}
        elif self.y != 380 and board[(self.y + 20)/20][self.x/20] == 1:
            self.no_move = False  
            self.key_handler= {LEFT:False, RIGHT:False}  
        else:
            self.no_move = True
            
            
    #the keyboard function 
        if self.no_move == True:
            if self.key_handler[LEFT] == True and self.x > 0 and board[self.y/20][(self.x - 20)/20] == 0:
                self.x = self.x - 20
            
            elif self.key_handler[RIGHT] == True and self.x < 180 and board[self.y/20][(self.x + 20)/20] == 0:
                self.x = self.x + 20

    
 # creating the board , the board ensures tbhe blocks dont overlap       
board=[]       
for variable in range(The_Row):
    row_list = []
    for variable in range(The_Col): 
        row_list.append(0)
    board.append(row_list)        
    
           

# Create another class for the game
class Game:
    # print("In game")
    def __init__(self):
        self.block = Blocks()   #first block that is instantiated
        self.block_list = [self.block]
        self.speed = 0  #initial speed of the board
        self.score = 0  # keep score of the board
        self.counter = 0 # used in gameover function
        self.show = False # used in gameover function
        
# displays all blocks stored in the list
    def display(self):
        for variable in self.block_list: #this iterates through the list and displays all the stored blocks
            variable.display()

        if self.block.no_move == False:
            # chnages the 0 to 1 in the board(list) 
            board[self.block_list[-1].y/20][self.block_list[-1].x/20] = 1
            self.counter += 1
            self.speed += 0.25   # increment speed when new block is called 
            self.pop_blocks()
            #appearing = Blocks()
            self.block = Blocks()
            self.block_list.append(self.block)
            self.game_over()
            
 # removes blocks when they are 4 matching and the score increses by 1  
    def pop_blocks(self):
        counter = 1
        matching = 1
        index_store = []
        while counter < 4:
            for blocks in self.block_list:
                #the code goes over the block list and check if blocks match or not
                if self.block.y + (matching*20) == blocks.y and self.block.x == blocks.x and self.block.colors == blocks.colors:
                    matching += 1
                    index_store.append(blocks)
            counter += 1
 # when blocks match it pops them all    
        if matching == 4:
            self.speed = 0
            self.score +=1
            #active = len(self.block_list)-1
            # self.counter = self.counter - 4
            
            board[self.block.y/20][self.block.x/20] = 0
            self.block_list.pop()
            
            for i in index_store:
                self.block_list.remove(i)
                board[i.y/20][i.x/20] = 0
                
# a function for the game over 
    def game_over(self):
    # the self counter is upposed to be 200, but I was not able to figure the problem that only shows 199 blocks
        if self.counter == 199:
            self.show = True
#call the game 
thegame=Game()

# Create a setup and a draw function 

def setup():
    global The_Row
    global The_Col
#color of background and line 
    background(210)
    stroke(180)
# determine size of the game 
    size(WIDTH, HEIGHT)

def draw():
    global The_Row
    global The_Col
    if frameCount %(max(1, int(8 - thegame.speed)))==0 or frameCount==1:
        background(210)
        thegame.display()
#Creation of the Grid Lines
    for variable in range(The_Col-1):
        line(20+(20*variable),0,20+(20*variable),The_Row*20)
    for variable in range(The_Row-1):
        line(0,20+(20*variable),The_Col*20,20+(20*variable))
# Modify the font for the gameover and score dispaly
    fill(0,0,0)
    textSize(15)
    text("Score: " + str(thegame.score), 125, 20)
    if thegame.show == True:
        fill(255,255,255)
        rect(0,0, 200, 400)
        fill(0,0,0)
        textSize(25)
        text("Game Over", 40, 200)
        textSize(15)
        text("Score: " + str(thegame.score), 70, 300)
        
#if key pressed
def keyPressed():
    if keyCode == LEFT:
        thegame.block.key_handler[LEFT]= True
    elif keyCode == RIGHT:
        thegame.block.key_handler[RIGHT]= True
        
#if key released         
def keyReleased():
    if keyCode == LEFT:
         thegame.block.key_handler[LEFT]= False
    elif keyCode == RIGHT:
         thegame.block.key_handler[RIGHT]= False


def mouseClicked():
    global thegame
    if thegame.show == True:
        thegame = Game()
   

    
    


    



              
