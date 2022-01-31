import React, {useEffect} from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducer/store'
import {fetchUsers} from '../reducer/users'

function Home(): JSX.Element {
	const dispatch = useDispatch();
	const { users, loading } = useSelector((state: RootState) => state.users)

	const handlePress = () => {
		dispatch(fetchUsers())
	}

	useEffect(() => {
		console.log(users)
		console.log(loading)
		dispatch(fetchUsers())
		console.log(users)
		console.log(loading)
	}, [])

	return <HomeTemplate />
}

export default Home
