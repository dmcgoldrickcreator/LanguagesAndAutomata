import math

# Question 1
def change(cents):

    # error and type checking
    if (cents - int(cents) != 0):
        error = TypeError('No fractional amounts allowed')
        raise error
    
    if cents < 0:
        error = ValueError('amount cannot be negative')
        raise error
    
    # calculating the number of coins needed
    quarters = math.floor(cents / 25)
    cents %= 25

    dimes = math.floor(cents / 10)
    cents %= 10

    nickels = math.floor(cents / 5)
    cents %= 5

    pennies = math.floor(cents / 1)
    cents %= 1

    
    return (quarters, dimes, nickels, pennies)


# Question 2
def stretched(s):

    # removing white space and possible hiccups to the code
    stripped = s.replace(" ", "")
    stripped = stripped.replace('\n', '')
    stripped = stripped.replace('\t', '')
  
    # turing the code into a list for easier manipulation
    characters = list(stripped)

    # iterating through list and strecthing it 
    for i in range (len(characters)):
       
        characters[i] = characters[i] * (i+1)

    
    # turning it back into a string
    s = "".join(characters)
    

    return s


# Question 3
def powers(*,base, limit):
    power = 1

    # loop to make sure we do not go over limit
    while(power <= limit):
        yield power
        power = power * base

      
# Question 4
def say(s=None):
    if s is None:
        return ''
    
    # defining another function to keep track of previous words
    def inner_say(in_s = None):
        if in_s is None:
            return s
        return say('{} {}'.format(s, in_s))

    return inner_say

# Question 5
def find_first_then_lower(predicate, strings):
    for word in strings:
        if predicate(word):
            return word.lower()
    return None

# Question 6
def top_ten_scorers(stats):
    validPlayers = []
    topPlayers = []
    for team in stats:
        for players in stats[team]:
            if players[1] >= 15:
                name = players[0]
                ppg = format(players[2] / players[1], ".2f")
                validPlayers.append((name, ppg, team))
    validPlayers.sort(key = lambda ppg : -float(ppg[1]))
    for player in validPlayers:
        playerData = ""
        playerData = playerData + "|".join(player)
        topPlayers.append(playerData)

    return topPlayers[:10]

# Question 7
def turing_machine(machine, input):
    return []


