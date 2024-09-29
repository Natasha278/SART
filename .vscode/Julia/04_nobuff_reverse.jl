"""
This way of doing it uses the graphemes library that comes with Julia
"""

using Unicode

function myreverse(s::String)
    return join(reverse(collect(Unicode.graphemes(s))))
end

# Examples with grapheme clusters
println(myreverse("hi 👋"))       # Output: 👋 ih
println(myreverse("asod🧑‍💻f"))  # Output: f🧑‍💻dosa
