

const Blog = () => {


    return (
        <div className="bg-sky-50">
            <h2 className="text-center text-3xl text-sky-600 font-bold my-4 underline">Answers</h2>
            <div className="grid grid-cols-1 mx-auto w-3/4">
                <div className="border p-6 mb-6 bg-white"><h2 className="text-xl font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className="text-base mt-4">Access Token: When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.<br />Refresh Token: A refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.</p>

                </div>
                <div className="border p-6 mb-6 bg-white">
                    <h2 className="text-xl font-semibold">Comparison between SQL and NoSQL databases</h2>
                    <p className="text-base mt-4">
                        <ul className="list-disc ml-4">
                            <li>SQL databases are relational, and NoSQL databases are non-relational.</li>
                            <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ul>
                    </p>

                </div>
                <div className="border p-6 mb-6 bg-white"><h2 className="text-xl font-semibold">What is express js? What is Nest JS?</h2>
                    <p className="text-base mt-4">Express JS: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It is a layer built on the top of the Node js that helps manage servers and routes.<br /> Next JS: Next.js is a React framework that gives you building blocks to create web applications.  By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>

                </div>
                <div className="border p-6 mb-6 bg-white"><h2 className="text-xl font-semibold">What is MongoDB aggregate and how does it work?</h2>
                    <p className="text-base mt-4">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;