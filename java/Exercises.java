import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.IntStream;

public class Exercises{

    public static List<Integer> change(int amount) {
        if(amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative.");
        }
        var coins = new ArrayList<Integer>();
        for (var coin : List.of(25, 10, 5, 1)) {
            coins.add(amount / coin);
            amount %= coin;
        }
        return List.copyOf(coins);
    }

    public static String stretched(String s) {
        String result = "";
        var characters = s.replaceAll("\\s+", "").codePoints().toArray();
        for(var i = 0; i < characters.length; i++){
            result += String.copyValueOf(Character.toChars(characters[i])).repeat(i + 1);
        }
        return result;
    }

    public static IntStream powers(int base) {
        return IntStream.iterate(1, n -> n * base);
    }

    // Word record for say
    record Word(String word){
        String ok() {
            return word;
        }

        Word and(String nextWord) {
            return new Word(word + " " + nextWord);
        }       
    }

    // say() method if no argument is passed through.
    public static String say() {
        return "";

    }

    // say() method if an argument is passed through.
    public static Word say(String word) {
        return new Word(word);
    }

    public static Optional<String> findFirstThenLower(Predicate<String> p, List<String> strings){
        return strings.stream().filter(p).findFirst().map(string -> string.toLowerCase());    
    }

    public static List<String> topTenScorers(Map<String, List<String>> stats) {
        record Player(String name, double ppg, String team) {}
        var playerList = new ArrayList<Player>();

        stats.keySet()
        .forEach(team -> stats.get(team)
        .forEach(profile -> { 
            var playerStats = profile.split(",");
            var playerName = playerStats[0];
            var gamesPlayed = Double.parseDouble(playerStats[1]);
            var ppg = Double.parseDouble(playerStats[2]) / gamesPlayed;
            if(gamesPlayed >= 15){
                playerList.add(new Player(playerName, ppg, team));
            }
        ;}));

        return playerList.stream()
            .sorted((playerOne, playerTwo) -> Double.compare(playerOne.ppg(), playerTwo.ppg()))
            .map(player -> String.format("%s|%,.2f|%s", player.name, player.ppg, player.team))
            .limit(10)
            .toList();
    }
}
