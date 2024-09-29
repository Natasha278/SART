"""
This function determines if input year is a gap year and returns a true or false value
"""

function is_leap_year(year)
    year % 4 == 0 && (year % 100 != 0 || year %  400 == 0)
end

println("Please enter a year:")
year = parse(Int, readline())

println(is_leap_year(year))