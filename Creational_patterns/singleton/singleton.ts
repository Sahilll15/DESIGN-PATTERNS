class AppConfig{
    private static instance:AppConfig;

    public readonly apiUrl:string;
    public readonly theme:string;


    constructor(apiUrl:string,theme:string) {
        this.apiUrl=apiUrl;
        this.theme=theme
    }

    public static getInstance(apiUrl:string,theme:string){
        if(!AppConfig.instance){
            AppConfig.instance=new AppConfig(apiUrl,theme);
        }
        
        return AppConfig.instance;
    }


}

const config1=AppConfig.getInstance('https://api.com','black')
const config2=AppConfig.getInstance('https://random.com','laal')


console.log('are they same',config1===config2)

