'''
Shamma Alkhoori
14 October 2020
'''
# I will create a word search gam , enjoy it  

# Importing the game 

import time
import os 
import random		

# Printing the whole original board
def print_the_board():
	print("\n +"+"---+" *col_num)
	for x in range(row_num):
		print( " "+"|",end=' ')
		for y in range(col_num):
			print(board[x][y]+ " | ",end ="")
		print("\n +"+"---+"*col_num)
# Creating a function for the win
def Win():
	if len(theword)==0:
		return True
# Create a function to check the directions horizontally, vertically, and diagonally
def direction(word,row,col):

	dr=[[0,1], [0,-1], [1,0],[-1,0],[-1,1],[-1,-1],[1,1],[1,-1]]
	for direction in dr:
		cnt=1
		for i in range (1,len(word)):
			try:
				if board[row+direction[0]*i][col+direction[1]*i]!=word[i]:
					break
			except:
				break
			cnt+=1
		if cnt == len(word):
			return True, direction
	return False, []
# Create a function this time to capitilize the word after it has been found
def Capital(row,col,length, path):
	for i in range (length):
		board[row][col]=board[row][col].upper()
		row+=path[0]
		col+=path[1]

	
# Usage of Global Variables 

play=False
board=[]
boards= random.randint(1,12) 
final_board="board_"+str(boards)+".csv"
board_alpha=[]
The_Players={0:[],1:[]}
Players_Num=2
word_inuse=[]



theturns=random.randint(0, 1)

	# reading a file 
board_1=open(final_board,"r")
	# Getting the board dimension 
lookup=board_1.readline().replace("\n","").split(",")
# Creating the dimensions of the board 
row_num=int(lookup[0])
col_num=int(lookup[1])
theword= lookup[2:]
# print(theword)

#Creating an board with letters 
for row in board_1: 
	row_list = []
	row=row.replace(",","").replace("\n","")
	for cols in row: 
		row_list.append(cols)
	board_alpha.append(row_list)
# Printing the board with the letters
for x in range (row_num):
	the_row=[]
	for y in range (col_num):
		the_row.append(board_alpha[x][y])
	board.append(the_row)


# Create a wgile function for the whole game restrictions 
while not play:
# Printing the board
	print_the_board()


	win=False

	# checking for input validation
	input_valid = True
	print("Player", theturns)
	choice=input( " Enter a guessing word you can depict in board ")
	

	if not len(choice)>=3: # check invalid input for word to be 3 charcters and more
		print("The word should be 3 characters or more")
			
	elif not choice.isalpha():#inform that word contain no alpha's
		print("All words should be of numbers only")
			
	elif choice in word_inuse: # check word not to be used twice 
		print(" Sorry, the word you chosed have been used already !")
	else:
		input_valid=True
# If player enters invalid input or guessed smae word, then they miss their turn
	if not input_valid:
		print(" Invalid input. Sorry, you have missed your turn. ")
		theturns=(theturns+1)%Players_Num
		continue # It will go back to the beginning of while loop
	
	#if player guess correct word, it will remove word from list and store it
	if choice in theword:
		print("The word is in board")
		words=theword.pop(theword.index(choice))
		word_inuse.append(words)
	# Time to store answer in dictionary 

		The_Players[(theturns)].append(words)

		# Showing right naswers
		for characters in range (Players_Num):
			if str(characters) in The_Players:
				print("The player ", characters +1, "have guessed", The_Players[str(characters)])
# Trying to call function for directions
		for row in range(row_num):
			for col in range(col_num):
				if board[row][col] == choice[0]:
				# Callig out the functions for the direction and capitalizing the word
					
					isWord, path = direction(choice,row,col)
					
					if (isWord):
						Capital(row,col,len(choice),path)


	else: # check word not in board
		print("word not found in board")

	# Randomly chnage players turn 
	theturns=(theturns+1)%Players_Num

	if Win():
		win=True
		play=True
# Checking for Endgame, one with highest scores wins

Player0=len(The_Players[0])
Player1=len(The_Players[1])
if Player0> Player1:
	print(" Player 0 has won ")
elif Player1>Player0:
	print(" Player 1 has won ")
else:
	print("Its a tie , yay !")


















