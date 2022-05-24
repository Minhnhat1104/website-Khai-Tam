
int red = 2;
int green = 3;
int blue = 4;
int orange = 5;
int white = 6;
int yellow = 7;
int button = 8;
int preState = 0;
int startTime = 0;

void setup() {
  pinMode(red, OUTPUT);  
  pinMode(green, OUTPUT);
  pinMode(blue, OUTPUT);
  pinMode(orange, OUTPUT);  
  pinMode(white, OUTPUT);
  pinMode(yellow, OUTPUT);  
  pinMode(button, INPUT);

  Serial.begin(9600);
}
void loop() {
  digitalWrite(red, HIGH);  
  digitalWrite(green, HIGH);
  digitalWrite(blue, HIGH);
  int btnState = digitalRead(button);
  if (btnState == HIGH) {
        digitalWrite(orange, HIGH);  
    	digitalWrite(white, HIGH);
    	digitalWrite(yellow, HIGH);
    if(preState == HIGH)
    {
      	int myTime = millis();
      int duration = myTime - startTime;
      	if (myTime - startTime > 10000) {
          // thuc hien yeu cau lon hon 10s
      	}
        else {
          // 3 den chop tat
          if ((myTime / 1000) % 3==0){
              Serial.print('1');
            digitalWrite(red, HIGH);
            digitalWrite(green, LOW);
            digitalWrite(blue, LOW);
        }
          else if ((myTime / 1000) % 3==1){
              Serial.print('2');
            digitalWrite(red, LOW);
            digitalWrite(green, HIGH);
            digitalWrite(blue, LOW);
        }
          else if ((myTime / 1000) % 3==2) {
              Serial.print('3');
            digitalWrite(red, LOW);
            digitalWrite(green, LOW);
            digitalWrite(blue, HIGH);
        }
      }
      
    }
  }
  else {
    digitalWrite(orange, LOW);  
    digitalWrite(white, LOW);
    digitalWrite(yellow, LOW);
  }
}