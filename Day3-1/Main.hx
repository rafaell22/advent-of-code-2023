class Main {
  static public function main():Void {
#if sys
    trace("File system can be accessed");
    final lineLength = 140;

    var fileInput:sys.io.FileInput = sys.io.File.read('data/input.txt');
    var numbers = [];
    var specialCharacters = [];
    var currentNumber = '';
    var numberRegexp = ~//
    while (true) {
      try {
        var char:String = fileInput.readString(1);
        var newLinesRegExp = ~/\n|\r/;
        if(!newLinesRegExp.match(char)) {
          trace(char);
        }
      } catch(errorReadingString:haxe.io.Eof) {
        break;
      }
    }
    fileInput.close();
#end
  }
}
