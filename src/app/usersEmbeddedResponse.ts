import {User} from './user';

export interface UserEmbeddedResponse{
	_embedded: {
		users: User[];
		_links: {self: {href: string}} 
	}
}