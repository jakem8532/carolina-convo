import React from 'react';
import ConvoList from '../components/ConvoList';
import PostForm from '../components/PostForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CONVOS, QUERY_ME_BASIC } from '../utils/queries';
import styles from "../index.css";

const Home = () => {
    const { loading, data } = useQuery(QUERY_CONVOS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const convos = data?.convos || [];

    const loggedIn = Auth.loggedIn();

    return(
        
        <main>
            <hero className="hero background">
                  <img src="../public/carolina.png"/>
            </hero>
            <div>
                <head>
                    <div className="background">
                        <SearchBar/>
                    </div>
                </head>
            </div>
            <div className="background">
                <ConvoList/>
            </div>
            <div>
                {loggedIn && (
                    <div className="background">
                        <PostForm/>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Home;