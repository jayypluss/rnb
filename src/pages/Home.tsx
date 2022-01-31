import React, {useEffect} from 'react'
import HomeTemplate from '../components/templates/HomeTemplate'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers/storeExample'
import {fetchUsers} from '../reducers/usersExample'

function Home(): JSX.Element {
	const dispatch = useDispatch()
	const {users, loading} = useSelector((state: RootState) => state.users)

	const handlePress = () => {
		console.log(users)
		console.log(loading)
		dispatch(fetchUsers())
	}

	useEffect(() => {
		console.log(users)
		console.log(loading)
		dispatch(fetchUsers())
	}, [])

	return <HomeTemplate onPress={handlePress} />
}

export default Home
