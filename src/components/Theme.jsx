import React from 'react'
import useTheme from '../contexts/theme';

export default function Theme() {
    const { themeMode, darkMode, lightMode } = useTheme()
    // const onChangeDark = (e) => {
    //     const darkModeStatus = e.target.checked
    //     if (darkModeStatus) {
    //         darkMode()
    //     }
    //     // else{
    //     //     lightMode()
    //     // }
    // }
    // const onChangeLight = (e) => {
    //     const darkModeStatus = e.target.checked
    //     if (darkModeStatus) {
    //         lightMode()
    //     }
    // }

    const handleMode = (e)=> {
        const selectTheme   = e.target.value
        if(selectTheme  === 'dark'){
            darkMode()
        }else{
            lightMode()
        }
    }
    return (
        <>
            {/* <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={onChangeDark}
                    checked={themeMode === "dark"}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
            </label> */}
            
            <label>
                <select onChange={handleMode}>
                    <option value="light" >light</option>
                    <option value="dark">dark</option>
                </select>
            </label>
        </>
    );
}
