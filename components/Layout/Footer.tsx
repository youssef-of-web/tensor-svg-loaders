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
                        {" "}by Youssef Mansouri
                    </span>
                </div>
            </footer>
        </div>
    );
}