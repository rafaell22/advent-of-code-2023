class Main {
  static public function main():Void {
#if sys
    trace("File system can be accessed");

    var fileInput:sys.io.FileInput = sys.io.File.read('data/input.txt');
    while (true) {
      try {
        var char:String = fileInput.readString(1);
        trace(char);
      } catch(errorReadingString:haxe.io.Eof) {
        break;
      }
    }
    fileInput.close();
#end
  }
}
