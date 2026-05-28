import java.util.Scanner;

public class caesarCipher {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Napisz treść którą chcesz zaszyfrować: ");
        String s = sc.nextLine();
        System.out.println("Klucz; ");
        int k = sc.nextInt();
        encryptCaesar(s,k);
        encryptCaesarmanual(s,k);
        sc.close();
    }

    private static void encryptCaesarmanual(String s, int k) {
        char[] alphabet = {
                'a','b','c','d','e','f','g','h','i',
                'j','k','l','m','n','o','p','q','r',
                's','t','u','v','w','x','y','z'
        };

        char[] encrypted = new char[s.length()];

        for (int i = 0; i < s.length(); i++) {

            char current = s.charAt(i);
            int index = -1;
            for (int j = 0; j < alphabet.length; j++) {
                if (alphabet[j] == current) {
                    index = j;
                    break;
                }
            }
            encrypted[i] = alphabet[(index + k) % alphabet.length];
        }

        System.out.println(encrypted);
    }
// Użycie automatycznego przypisania tablicy alfabetu z ascii (według mnie dużo łatwiejsze podejście)
    private static void encryptCaesar(String s, int k) {
        char[] alphabet = new char[26];
        for (int i = 0; i < alphabet.length; i++) {
            alphabet[i] = (char) ('a' + i);
        }
        char[] encrypted = new char[s.length()];
        for (int i = 0; i < s.length(); i++) {
            encrypted[i] = (char) (s.charAt(i) + k);
        }
        System.out.println(encrypted);

    }
}