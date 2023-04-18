import { useDispatch } from 'react-redux'
import { changeUsersFilter, setPage } from '../../Redux/pageParametersSlice'
import { MyContainer, MyLabel, MySelect } from './index.styled'

function UsersDropDown() {
	const dispatch = useDispatch()

	const handleFilter = (e: any) => {
		dispatch(changeUsersFilter(e.currentTarget.value))
		dispatch(setPage(1))
	}

	return (
		<MyContainer>
			<MyLabel htmlFor="users_filter">Filter</MyLabel>
			<MySelect name="users_filter" onChange={handleFilter}>
				<option value="all">All</option>
				<option value="follow">Follow</option>
				<option value="following">Following</option>
			</MySelect>
		</MyContainer>
	)
}

export default UsersDropDown
