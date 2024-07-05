import { MainArticle } from "../components/MainArticle";
import { NewContainer } from "../components/NewContainer";
import { ArticlesContainer } from "../components/ArticlesContainer";



const Login = () => {
    return (     < layout>
        <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle />
        <NewContainer />
        </div>
        <div>
        <ArticlesContainer />
        </div>
    </layout>
    )
    };
    
    export default Login;
    