import React from 'react';
import ConvoList from '../components/ConvoList';
import PostForm from '../components/PostForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_CONVOS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_CONVOS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const convos = data?.convos || [];

    const loggedIn = Auth.loggedIn();

    return(
        <main>
            <div>
                
            </div>
        </main>
    )
}