import { MY_GITHUB_URL } from "@/constants/constants";

export default function Footer() {
    return (
        <div className="p-6">
            <footer className="bottom-0 w-full py-4 text-center text-sm text-muted-foreground">
                <div className="animate-fade-in">
                    <span className="inline-block hover:scale-110 transition-transform duration-300">
                        Made with{" "}
                    </span>
                    <span className="inline-block animate-bounce hover:animate-ping mx-1">
                        ❤️
                    </span>
                    <span className="inline-block hover:scale-110 transition-transform duration-300">
                        {" "}by{" "}
                        <a 
                            href={`${MY_GITHUB_URL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary underline decoration-dotted underline-offset-4 transition-colors duration-200 hover:decoration-solid"
                        >
                            Youssef Mansouri
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}