import type { MenuItemConstructorOptions } from 'electron'
import { BaseTabComponent } from '../components/baseTab.component'
import { TabHeaderComponent } from '../components/tabHeader.component'

/**
 * Extend to add items to the tab header's context menu
 */
export abstract class TabContextMenuItemProvider {
    weight = 0

    abstract getItems (tab: BaseTabComponent, tabHeader?: TabHeaderComponent): Promise<MenuItemConstructorOptions[]>
}
