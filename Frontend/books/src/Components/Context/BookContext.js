import React,{useState, createContext} from 'react'

export const BookContext = createContext()


export const BookProvider = (props) => {
    const [docsbooks, setDocbooks] = useState([])
    const [ecobooks, setEcobooks] = useState([])
    const [review, setReview] = useState([])
 

    return(
        <BookContext.Provider value={[docsbooks, review, setReview, setDocbooks, ecobooks, setEcobooks ]}>
            {props.children}
        </BookContext.Provider>
    );
}