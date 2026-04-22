import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface IconGroup {
  id: string;
  label: string;
  kind?: 'custom' | 'brand';
  icons: string[];
}

interface IconTile { name: string; weight?: number; variant?: string; }
interface IconRow  { tiles: (IconTile | null)[]; }

const ICON_GROUPS: IconGroup[] = [
  {
    id: 'custom', label: 'Commodity Icons', kind: 'custom',
    icons: ['Cattle','Sheep','Dog','Goat','Alpaca','Equine','Machinery','Property','Charity','Feed','Auction'],
  },
  {
    id: 'pages', label: 'Pages',
    icons: ['Home','grid_view','dashboard','settings','manufacturing','shopping_bag','local_mall','shopping_cart','calendar_view_month','menu','more_horiz','more_Vert','grid_on','view_module','save','border_color','edit','close','close_small','add_2','add','remove','add_circle','delete','auto_delete','tune','filter_list','content_copy','file_copy','explore','call_split','build','swap_vert'],
  },
  {
    id: 'navigation', label: 'Navigation',
    icons: ['drag_handle','drag_indicator','collapse_content','expand_content','drag_pan','recenter','open_in_full','keyboard_double_arrow_left','keyboard_double_arrow_right','arrow_back_ios_new','arrow_forward_ios','chevron_forward','chevron_backward','redo','undo','open_in_new','logout','arrow_outward','arrow_selector_tool','replay','forward_media','keyboard_arrow_down','keyboard_arrow_up','arrow_drop_up','arrow_drop_down','arrow_upward_alt','arrow_downward_alt','arrow_upward','arrow_downward','fullscreen','stadia_controller'],
  },
  {
    id: 'status', label: 'Status',
    icons: ['check','check_small','download_done','check_box_outline_blank','check_box','check_box_filled','select_check_box','radio_button_unchecked','radio_button_checked','check_circle','cancel','info','help','error','info_i','do_not_disturb_on','warning','clock_loader_40','smart_toy','verified'],
  },
  {
    id: 'search', label: 'Search',
    icons: ['search','saved_search','data_loss_prevention','group_search','person_search','document_search','manage_search','mail','mark_email_read','mark_email_unread','forward_to_inbox','send','schedule_send','download','file_download_off','upload','downloading','download_for_offline','rocket_launch'],
  },
  {
    id: 'notifications', label: 'Notifications',
    icons: ['notifications','notification_important','notification_add','notification_settings','notifications_active','notifications_paused','notifications_unread','add_alert','notifications_off'],
  },
  {
    id: 'favouriting', label: 'Favouriting',
    icons: ['star','star_filled','bookmark_star','cards_star','favorite','favorite_filled','license','workspace_premium','stars','push_pin','diamond','calendar_month','calendar_today','calendar_clock','event_available','event_busy','event','today','edit_calendar','calendar_add_on','view_week','alarm_filled','alarm','acute','avg_pace','timer','update','timer_off','history','more_time','pace','schedule','hourglass'],
  },
  {
    id: 'location', label: 'Location',
    icons: ['where_to_vote','add_location','add_location_alt','location_on','location_on_filled','location_off','fmd_bad','person_pin_circle','location_searching','map','navigation','near_me','near_me_disabled','flag','flag_2','personal_places','swap_calls'],
  },
  {
    id: 'people', label: 'People',
    icons: ['person','group','account_box','account_circle','account_circle_off','supervised_user_circle','person_check','person_raised_hand','sentiment_neutral','sentiment_dissatisfied','sentiment_satisfied','support_agent','group_add','manage_accounts','price_check','request_quote','account_balance','add_card','currency_exchange','sell','shoppingmode','attach_money','percent','credit_card','price_change','tag','paid','credit_score','list_alt','list_alt_check','article','post_add','news','newspaper','format_list_bulleted','draft','sticky_note_2','docs','scan_delete','upload_file','task','edit_document','content_paste','inventory','folder','folder_copy','fact_check','problem','contract','contract_edit'],
  },
  {
    id: 'charts', label: 'Charts',
    icons: ['insert_chart','chart_data','bid_landscape','bar_chart','bar_chart_4_bars','trending_up','trending_down','troubleshoot','search_insights','pie_chart','computer','laptop_mac','desktop_mac','live_tv','phone_android','add_a_photo','photo_camera','no_photography','videocam','videocam_off','devices','devices_off','keyboard_alt','headphones','headset_mic','headset_off','call','code','wifi','wifi_off','cloud_done','cloud_alert','cloud_off','cloud_download','backup','sensors','podcasts','leak_add','cloud_sync','sync_desktop','sync_problem','published_with_changes','bluetooth','repeat','repeat_one','captive_portal','web','mic','mic_off','brand_awareness'],
  },
  {
    id: 'assessment', label: 'Assessment',
    icons: ['gavel','body_fat','content_cut','syringe','vaccines','fluid','fluid_balance','healing','dermatology','business_center','grass','psychiatry','rainy','clear_day','partly_cloudy_day','scale','local_shipping','delivery_truck_speed','gite','labs','science','genetics','confirmation_number','ecg_heart','pediatrics','male','family_history','category','garden_cart','domain','back_hand','palette','gpp_maybe','gpp_bad','lock_open','lock','lock_clock','visibility','visibility_off','visibility_lock','shield_with_heart'],
  },
  {
    id: 'messages', label: 'Messages',
    icons: ['chat_bubble','3p','chat','mark_chat_unread','chat_info','feedback','forum','campaign','lightbulb','light'],
  },
  {
    id: 'brand', label: 'Social Icons', kind: 'brand',
    icons: ['facebook-logo','instagram-logo','tiktok-logo','x-logo','linkedin-logo'],
  },
];

interface GroupData {
  id: string;
  label: string;
  kind?: 'custom' | 'brand';
  rows: IconRow[];
}

function buildGroups(): GroupData[] {
  return ICON_GROUPS.map(g => {
    if (g.kind === 'custom') {
      const rows: IconRow[] = [];
      for (let i = 0; i < g.icons.length; i += 6) {
        const chunk = g.icons.slice(i, i + 6).map(n => ({ name: n }));
        while (chunk.length < 6) chunk.push(null as unknown as IconTile);
        rows.push({ tiles: chunk });
      }
      return { id: g.id, label: g.label, kind: 'custom', rows };
    }

    if (g.kind === 'brand') {
      const rows: IconRow[] = [];
      for (let i = 0; i < g.icons.length; i += 6) {
        const chunk: (IconTile | null)[] = g.icons.slice(i, i + 6).map(n => ({ name: n, variant: 'bold' }));
        while (chunk.length < 6) chunk.push(null);
        rows.push({ tiles: chunk });
      }
      return { id: g.id, label: g.label, kind: 'brand', rows };
    }

    const tiles: (IconTile | null)[] = [];
    g.icons.forEach(name => tiles.push({ name, weight: 400 }));
    while (tiles.length % 6 !== 0) tiles.push(null);
    const rows: IconRow[] = [];
    for (let i = 0; i < tiles.length; i += 6) rows.push({ tiles: tiles.slice(i, i + 6) });
    return { id: g.id, label: g.label, rows };
  });
}

@Component({
  selector: 'ap-icons-panel',
  standalone: true,
  templateUrl: './ap-icons-panel.component.html',
  styleUrl: './ap-icons-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApIconsPanelComponent {
  readonly groups = buildGroups();
  copiedToken = signal<string | null>(null);

  copyIcon(name: string): void {
    navigator.clipboard.writeText(name);
    this.copiedToken.set(name + '_copy');
    setTimeout(() => this.copiedToken.set(null), 1500);
  }

  copyIconW(name: string, weight: number): void {
    navigator.clipboard.writeText(name);
    this.copiedToken.set(name + '_' + weight + '_copy');
    setTimeout(() => this.copiedToken.set(null), 1500);
  }

  isCopied(key: string): boolean {
    return this.copiedToken() === key;
  }

  isFilled(name: string): boolean { return name.endsWith('_filled'); }
  baseName(name: string): string  { return name.endsWith('_filled') ? name.slice(0, -7) : name; }

  fontVariation(weight: number): string {
    return `'FILL' 0, 'wght' ${weight}`;
  }

  commoditySrc(name: string): string {
    return `icons/commodity/${name.toLowerCase()}.svg`;
  }

  copyBrand(name: string, variant: string): void {
    navigator.clipboard.writeText(name);
    this.copiedToken.set(name + '_' + variant + '_copy');
    setTimeout(() => this.copiedToken.set(null), 1500);
  }

  phosphorClass(name: string, variant: string): string {
    return `ph-${variant} ph-${name}`;
  }

  brandDisplayName(name: string): string {
    return name.replace(/-/g, ' ');
  }
}
