class Solution {
  public int lengthOfLastWord(String s) {
    String[] seperatedWords = s.split(" ");
    int indexOfLastElement = seperatedWords.length - 1;
    String word = seperatedWords[indexOfLastElement];
    return word.length();
  }
}
