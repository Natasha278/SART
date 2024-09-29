println("Welcome to the calculator program")

while true
    # Prompt for the first number
    println("Enter the first number (or type 'exit' to quit):")
    input = readline()
    
    # Check if the user wants to exit
    if input == "exit"
        println("Bye!")
        break
    end

    # Try to parse the first number and handle invalid input
    try
        num1 = parse(Float64, input)
    catch
        println("Invalid input! Please enter a valid number.")
        continue  # Go back to the beginning of the loop
    end
    
    # Prompt for the second number
    println("Enter the second number:")
    input2 = readline()
    
    try
        num2 = parse(Float64, input2)
    catch
        println("Invalid input! Please enter a valid number.")
        continue
    end
    
    # Prompt for the operation
    println("Choose one of the available operations (+, -, *, /):")
    operation = readline()
    
    # Perform the chosen operation
    if operation == "+"
        result = num1 + num2
    elseif operation == "-"
        result = num1 - num2
    elseif operation == "*"
        result = num1 * num2
    elseif operation == "/"
        if num2 != 0
            result = num1 / num2
        else
            println("Error: Dividing by 0 is not defined.")
            result = "undefined"
        end
    else
        println("Invalid operation! Please choose one of the available operations.")
        result = "undefined"
    end

    # Display the result
    println("The result is: ", result)
end
    