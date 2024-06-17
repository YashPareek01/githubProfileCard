import React, { useEffect, useState } from 'react'

export default function Card() {
    const [data, setData] = useState([])



    useEffect(() => {
        fetch('https://api.github.com/users/YashPareek01/repos')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {data.length > 0 && (
                <a href="/">
                    <img className="p-8 rounded-t-lg" src={data[0].owner.avatar_url} alt="owner avatar" />
                </a>
            )}
            <div className="px-5 pb-5">
                <a href="/">
                    {data.length > 0 && (
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {data[0].owner.login}
                        </h5>
                    )}
                </a>
                <div className="flex items-center mt-2.5 mb-5 flex-col">
                    {data.map(repo => (
                        <a key={repo.id} href={repo.html_url} className="text-blue-500 hover:underline">
                            {repo.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

