import Foundation

enum NegativeAmountError: Error {
    case belowMinimum
}

func change(_ amount: Int) -> Result<(Int, Int, Int, Int), NegativeAmountError> {
    var amount = amount
    if amount < 0 {
        return .failure(.belowMinimum)
    } else {
        var coins:[Int] = [0, 0, 0, 0]
        let denominations:[Int] = [25, 10, 5, 1]
        for i in 0..<denominations.count {
            let (q, r) = amount.quotientAndRemainder(dividingBy: denominations[i])
            coins[i] = q
            amount = r
        }
        return .success((coins[0], coins[1], coins[2], coins[3]))
    }   
}

extension String {
    var stretched: Self {
        let trimmed = self.filter { !$0.isWhitespace }
        var result = ""
        for (index, char) in trimmed.enumerated() {
            let s = String(repeating: char, count: (index + 1))
            result = result + s
        }
        return result
    }
}

extension Array {
    func mapThenUnique<T: Hashable>(f: (Element) -> T) -> Set<T> {
        return Set(map{ f($0) })
    }
}

func powers(of: Int, through: Int, then f: (Int) -> ()) {
    var power = 1
    while power <= through {
        f(power)
        power = power * of
    }
}

protocol Animal {
    var name: String { get }
    var sound: String { get }
}

extension Animal {
    func speak() -> String { return (self.name + " says " + self.sound) }
}

struct Horse: Animal {
    var name: String
    var sound = "neigh"
}

struct Cow: Animal {
    var name: String
    var sound = "moooo"
}

struct Sheep: Animal {
    var name: String
    var sound = "baaaa"
}

struct say { 
    var phrase: String
    init(_ phrase: String) {
        self.phrase = phrase
    }
    func and(_ x: String) -> say{
        return say(phrase + " " + x)
    }
}

func twice<T>(_ f: (T) -> T, appliedTo x: T) -> T {
    return f(f(x))
}

func uppercasedFirst(of: [String], longerThan: Int) -> String? {
    return (of.first{ $0.count > longerThan })?.uppercased() ?? nil
}

