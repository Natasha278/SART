"""
--------------------------------------------------------------
This is a random number game. The computer will ask the user
an interval and pick a random number from inside those bounds
--------------------------------------------------------------
"""

println("Welcome to the Random Number Game. 
First, we will select an interval. Please input a number
for the lower bound:")

num1 = parse(Int64, readline())

println("Very well. Now input another one for the upper bound:")
num2 = parse(Int64, readline())

secret_number = rand(num1:num2)

println("Great! Now the game starts. Guess a number between ", num1, " and ", num2, ".")

guessed_number = parse(Int64, readline())

if guessed_number == secret_number
    println("Congratulations, you have won!")
else
    println("I am sorry, you have lost. The correct number was ", secret_number)
end
