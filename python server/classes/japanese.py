def isHiragana(c):
    return u'\u3040' <= c <= u'\u309F' 
def isKatakana(c):
    return u'\u30a0' <= c <= u'\u30FF'
def isKanji(c):
    return u'\u4e00' <= c <= u'\u9faf'

def isJapanese(str):
    for c in str:
        if isHiragana(c) or isKatakana(c) or isKanji(c):
            return True
    return False