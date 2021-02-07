import {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'

import Contact from "./Contact/Contact";
import Input from '../Input/Input';

import { changeFilter } from '../../redux/contacts-actions';
import { fetchContacts, deleteContact} from '../../redux/contacts-operation';
import { getVisibleContacts, getFilter } from '../../redux/contacts-selectors';


export default function ContactsList() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => getVisibleContacts(state));
    const value = useSelector((state) => getFilter(state))


    useEffect(() => {
        dispatch(fetchContacts())
    }, [])

    return (
        <>
        <h1>{contacts.length !== 0 ? 'Список контактов' : 'Список контактов пуст'}</h1>

        {contacts.length > 0 &&
        <> 
        <Input label="Find contacts by name" value={value} type="text" name="filter"  onChange={(e) => dispatch(changeFilter(e.target.value))}/>

        <ul>
            {contacts.map(contact => (<Contact key={contact.id} contact={contact} onDelete={() => dispatch(deleteContact(contact.id))}/>))}
        </ul>
        </>
        }
        </>
    )
}
