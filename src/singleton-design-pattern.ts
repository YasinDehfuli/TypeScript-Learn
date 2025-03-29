// Singleton Design Pattern 🔻

class SingletonPattern {
    private static instance: SingletonPattern;

    private constructor() {
    }

    public static getInstance() {
        if (!SingletonPattern.instance) {
            SingletonPattern.instance = new SingletonPattern();
        }
        return SingletonPattern.instance;
    }
}

const getSingletonPattern = SingletonPattern.getInstance()
const getSingletonPattern2 = SingletonPattern.getInstance()

console.log(getSingletonPattern === getSingletonPattern2)