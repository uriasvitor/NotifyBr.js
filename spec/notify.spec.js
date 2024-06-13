
describe("Testing", function() {
    let notify;
    let notifyContent;

    beforeEach(()=>{
        notify = new Notify();

        notifyContent = document.createElement('div');
        notifyContent.id = 'notify';
        document.body.appendChild(notifyContent)
    })

    it('should create a notification with correct message, type, and delay', function(done) {
        const message = 'Test message';
        const type = 'info';
        const delay = 1000;
    
        notify.createNotify(message, type, delay);
    
        const notificationElement = document.querySelector(`#notify .${type}`);
        expect(notificationElement).not.toBeNull();
        expect(notificationElement.textContent).toBe(message);
        expect(notificationElement.className).toBe(type);
    
        setTimeout(() => {
          expect(document.querySelector(`#notify .${type}`)).toBeNull();
          done();
        }, delay + 500);
      });

    it("Expect that notify is a instance of notify class", function() {
        const notifyInstanceTest = new Notify();
        expect(notifyInstanceTest).toBeInstanceOf(Notify);
    })

    it("should throw an error when an invalid type is passed", function() {
        expect(() => {
            notify.createNotify("Well done!", "error", 1000);
        }).toThrowError("Please choose one of these types: 'erro', 'warn', 'info', 'sucess'");
    });

    it("Should throw an erro when an empty string is passed", function(){
        expect(()=>{
            notify.createNotify("", "erro", 1000)
        }).toThrowError("Please provide a valid message")
    })

    it("Should throw an erro when delay is undefined", function(){
        expect(()=>{
            notify.createNotify("The account has been created sucessfuly", "sucess")
        }).toThrowError("Delay must be a number")
    })

    it("Should throw an erro if params has not provide", function(){
        expect(()=>{
            notify.createNotify("","",0)
        }).toThrowError("Please provide a valid message")
    })
});