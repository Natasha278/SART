"""
And this way of doing it uses an I/O Buffer
"""

using Unicode

function myreverse(s::String)
    graphemes_list = collect(Unicode.graphemes(s))  # Split into grapheme clusters (string)
    n = length(graphemes_list)
    # A buffer in Julia dinamically allots memory space as needed to something
    reversed_str = IOBuffer()
    
    # Iterate from n to 1 with a step size of -1
    for i in n:-1:1
        print(reversed_str, graphemes_list[i])
    end
    
    # take!(x) retrieves and clears the contents of object x. 
    return String(take!(reversed_str))  # Convert the buffer back to a string
end

# Test cases
println(myreverse("stressed"))   # Output: desserts
println(myreverse("strops"))     # Output: sports
println(myreverse("racecar"))    # Output: racecar
println(myreverse("hi 👋"))      # Output: 👋 ih
println(myreverse("asod🧑‍💻f"))  # Output: f🧑‍💻dosa