import 'antd/dist/antd.min.css';
import { Input } from "antd";
import { useState, useContext} from "react";
import { nanoid } from "nanoid";
import { Button } from "antd";
import { ReduxContext } from "../context/ReduxContext";
import { addTodo } from "../Redux/Action";
import "./todo.css";


export const Todo = () => {
    const { dispatch, getState } = useContext(ReduxContext);
    const [data, setData] = useState([]);
    
    const [value, setValue] = useState("");
    
    const addTodoItem = addTodo({ id: nanoid(), title: value, status: false });
 
   

    
    return (
        <>
            <div className="search-box">
            <h1>Google</h1>
                <Input
                    style={{ width: "60%", height: "40px" }}
                    placeholder="Google search"
                    type="text"
                    onChange={(error) => setValue(error.target.value)}
                ></Input>
                <Button  className="box" 
                style={{ height: "40px", marginLeft: "0.7rem" }}
                  
                    onClick={() => {
                        dispatch(addTodoItem);
                        setData(getState());
                    }}
                >
                   search

                </Button>
                

            </div>
          
        </>
    );
};

