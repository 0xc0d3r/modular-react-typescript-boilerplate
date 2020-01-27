import { History } from 'history'

import { TODOS_PAGE_PATH } from '../constants/NavigationConstants'

export function gotoTodosPage( history: History ): void {
    history.push( TODOS_PAGE_PATH )
}
