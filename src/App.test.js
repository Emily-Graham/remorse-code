import { render, screen } from '@testing-library/react';
import App from './App';

const characterError = new Error("input should be '.', '-', '/', ' '");
const specialCharacterError = new Error("input character is not recognised");

//Tests for functions
describe("convertEnglish() should take string of English and convert to corrosponding morse code", () => {
  
  it("Should treat multiple spaces like one space", () => {
    expect(convertEnglish("A  ")).toBe(".-");
    expect(convertEnglish("hello    world")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });

  it("Should convert individual characters correctly", () => {
    expect(convertEnglish("A")).toBe(".-");
    expect(convertEnglish("a")).toBe(".-");
    expect(convertEnglish("0")).toBe("-----");
    expect(convertEnglish(":")).toBe("---...");
  });

  it("Should convert entire words correctly with space between letters", () => {
    expect(convertEnglish("hello world")).toBe(".... . .-.. .-.. ---");
    expect(convertEnglish("")).toBe();
  });

  it("Should convert entire sentences correctly with slash after each word", () => {
    expect(convertEnglish("hello world")).toBe();
    expect(convertEnglish()).toBe();
  });

  it("Should correctly identify end of sentences and sentences in paragraphs", () => {
    expect(convertEnglish("hello world.")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.-");
    expect(convertEnglish("hello@world.com")).toBe(".... . .-.. .-.. --- .--.-. .-- --- .-. .-.. -.. .-.-.- -.-. --- --");
    expect(convertEnglish("hello world. Bye.")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.- / -... -.-- ..-.-.-");
  });

  it("Should throw an error if character has no known morse code equivalent", () => {
    expect(() => convertEnglish("^")).toThrowError(specialCharacterError);
    expect(() => convertEnglish("[")).toThrowError(specialCharacterError);
  });
});

describe("convertMorse() should take string of morse code and convert to corrosponding English", () => {

  it("Should treat multiple spaces like one space", () => {
    expect(convertMorse(".... . .-.. .-..   ---")).toBe("Hello");
    expect(convertMorse("   .... . .-.. .-.. ---")).toBe("Hello");
  });

  it("Should convert morse code 'character' into a single English character", () => {
    expect(convertMorse("-.-")).toBe("k");
    expect(convertMorse("..---")).toBe("2");
    expect(convertMorse(".--.-.")).toBe("@");
  });

  it("Should convert morse code words into English words", () => {
    expect(convertMorse(".... . .-.. .-.. ---")).toBe("Hello");
    expect(convertMorse("")).toBe("he");
  });

  it("Should convert morse code sentences into English sentences", () => {
    expect(convertMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.-")).toBe("Hello world.");
  });

  it("Should captitalize the first letter of the sentence", () => {
    expect(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.-").toBe("Hello world.");
    expect(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. .-.-.- / -... -.-- ..-.-.-").toBe("Hello world. Bye.");
  });

  it("Should throw an error if input is not '.', '-', '/', ' '", () => {
    expect(() => convertMorse("a")).toThrowError(characterError);
    expect(() => convertMorse(".--.- 5 .")).toThrowError(characterError);
  });
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
