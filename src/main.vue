<template lang="pug">
  .int-tel-input-wapper.clear
    .int-tel-select(ref="select", @click="selectInputClickHandle")
      input(
        readonly,
        ref="selectInput",
        :value="selectedInput"
      )
      .int-tel-icon(:class="{'is-reverse': visible}")
    transition(name="zoom-in-top")
      .select-dropdown(v-show="visible", ref="selectDropdown")
        .scrollbar__wrap
          .filter-wapper
            .filter-input
              input(
                type="text",
                placeholder="Search for countries and regions",
                v-model="filterString"
              )
            .filter-alphabet.clear
              p(
                v-for="letter in alphabet",
                v-text="letter",
                :class="{'selected': letter === filterLetter}"
                @click="alphabetClickHandle(letter)"
              )
          ul.scrollbar(ref="scrollbar")
            li.options.no-result(v-show="Object.keys(calculatePhoneData).length === 0")
              span search no result
            li.options.clear(
              v-for="(item, key) in calculatePhoneData",
              :class="{'selected': countryAbbr === item.addr}",
              @click.stop="selectOptionHandle(item, key)",
              :key="item.addr"
            )
              span.int-countries-flag(:class="item.addr")
              span.int-countries-name(v-text="item.name")
              span.int-countries-addr(v-text="`+${item.code}`")
    .int-tel-input
      input(
        type="tel",
        :readonly="disabled",
        :value="phone",
        @input="phoneInputHandel",
        :placeholder="placeholder"
      )
</template>

<script>
  const phonesData = {
    af: { addr: 'af', name: 'Afghanistan (‫افغانستان‬‎)', code: 93, example: '070 123 4567' },
    al: { addr: 'al', name: 'Albania (Shqipëri)', code: 355, example: '066 123 4567' },
    dz: { addr: 'dz', name: 'Algeria (‫الجزائر‬‎)', code: 213, example: '0551 23 45 67' },
    as: { addr: 'as', name: 'American Samoa', code: 1684, example: '(684) 733-1234' },
    ad: { addr: 'ad', name: 'Andorra', code: 376, example: '312 345' },
    ao: { addr: 'ao', name: 'Angola', code: 244, example: '923 123 456' },
    ai: { addr: 'ai', name: 'Anguilla', code: 1264, example: '(264) 235-1234' },
    ag: { addr: 'ag', name: 'Antigua and Barbuda', code: 1268, example: '(268) 464-1234' },
    ar: { addr: 'ar', name: 'Argentina', code: 54, example: '011 15-2345-6789' },
    am: { addr: 'am', name: 'Armenia (Հայաստան)', code: 374, example: '077 123456' },
    aw: { addr: 'aw', name: 'Aruba', code: 297, example: '560 1234' },
    au: { addr: 'au', name: 'Australia', code: 61, example: '0412 345 678' },
    at: { addr: 'at', name: 'Austria (Österreich)', code: 43, example: '0664 123456' },
    az: { addr: 'az', name: 'Azerbaijan (Azərbaycan)', code: 994, example: '040 123 45 67' },
    bs: { addr: 'bs', name: 'Bahamas', code: 1242, example: '(242) 359-1234' },
    bh: { addr: 'bh', name: 'Bahrain (‫البحرين‬‎)', code: 973, example: '3600 1234' },
    bd: { addr: 'bd', name: 'Bangladesh (বাংলাদেশ)', code: 880, example: '01812-345678' },
    bb: { addr: 'bb', name: 'Barbados', code: 1246, example: '(246) 250-1234' },
    by: { addr: 'by', name: 'Belarus (Беларусь)', code: 375, example: '8 029 491-19-11' },
    be: { addr: 'be', name: 'Belgium (België)', code: 32, example: '0470 12 34 56' },
    bz: { addr: 'bz', name: 'Belize', code: 501, example: '622-1234' },
    bj: { addr: 'bj', name: 'Benin (Bénin)', code: 229, example: '90 01 12 34' },
    bm: { addr: 'bm', name: 'Bermuda', code: 1441, example: '(441) 370-1234' },
    bt: { addr: 'bt', name: 'Bhutan (འབྲུག)', code: 975, example: '17 12 34 56' },
    bo: { addr: 'bo', name: 'Bolivia', code: 591, example: '71234567' },
    ba: { addr: 'ba', name: 'Bosnia and Herzegovina (Босна и Херцеговина)', code: 387, example: '061 123 456' },
    bw: { addr: 'bw', name: 'Botswana', code: 267, example: '71 123 456' },
    br: { addr: 'br', name: 'Brazil (Brasil)', code: 55, example: '(11) 96123-4567' },
    io: { addr: 'io', name: 'British Indian Ocean Territory', code: 246, example: '380 1234' },
    vg: { addr: 'vg', name: 'British Virgin Islands', code: 1284, example: '(284) 300-1234' },
    bn: { addr: 'bn', name: 'Brunei', code: 673, example: '712 3456' },
    bg: { addr: 'bg', name: 'Bulgaria (България)', code: 359, example: '048 123 456' },
    bf: { addr: 'bf', name: 'Burkina Faso', code: 226, example: '70 12 34 56' },
    bi: { addr: 'bi', name: 'Burundi (Uburundi)', code: 257, example: '79 56 12 34' },
    kh: { addr: 'kh', name: 'Cambodia (កម្ពុជា)', code: 855, example: '091 234 567' },
    cm: { addr: 'cm', name: 'Cameroon (Cameroun)', code: 237, example: '6 71 23 45 67' },
    ca: { addr: 'ca', name: 'Canada', code: 1, example: '(204) 234-5678' },
    cv: { addr: 'cv', name: 'Cape Verde (Kabu Verdi)', code: 238, example: '991 12 34' },
    bq: { addr: 'bq', name: 'Caribbean Netherlands', code: 599, example: '318 1234' },
    ky: { addr: 'ky', name: 'Cayman Islands', code: 1345, example: '(345) 323-1234' },
    cf: { addr: 'cf', name: 'Central African Republic (République centrafricaine)', code: 236, example: '70 01 23 45' },
    td: { addr: 'td', name: 'Chad (Tchad)', code: 235, example: '63 01 23 45' },
    cl: { addr: 'cl', name: 'Chile', code: 56, example: '09 6123 4567' },
    cn: { addr: 'cn', name: 'China (中国)', code: 86, example: '131 2345 6789' },
    cx: { addr: 'cx', name: 'Christmas Island', code: 61, example: '0412 345 678' },
    cc: { addr: 'cc', name: 'Cocos (Keeling) Islands', code: 61, example: '0412 345 678' },
    co: { addr: 'co', name: 'Colombia', code: 57, example: '321 1234567' },
    km: { addr: 'km', name: 'Comoros (‫جزر القمر‬‎)', code: 269, example: '321 23 45' },
    cd: { addr: 'cd', name: 'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', code: 243, example: '0991 234 567' },
    cg: { addr: 'cg', name: 'Congo (Republic) (Congo-Brazzaville)', code: 242, example: '06 123 4567' },
    ck: { addr: 'ck', name: 'Cook Islands', code: 682, example: '71 234' },
    cr: { addr: 'cr', name: 'Costa Rica', code: 506, example: '8312 3456' },
    ci: { addr: 'ci', name: 'Côte d’Ivoire', code: 225, example: '01 23 45 67' },
    hr: { addr: 'hr', name: 'Croatia (Hrvatska)', code: 385, example: '091 234 5678' },
    cu: { addr: 'cu', name: 'Cuba', code: 53, example: '05 1234567' },
    cw: { addr: 'cw', name: 'Curaçao', code: 599, example: '9 518 1234' },
    cy: { addr: 'cy', name: 'Cyprus (Κύπρος)', code: 357, example: '96 123456' },
    cz: { addr: 'cz', name: 'Czech Republic (Česká republika)', code: 420, example: '601 123 456' },
    dk: { addr: 'dk', name: 'Denmark (Danmark)', code: 45, example: '20 12 34 56' },
    dj: { addr: 'dj', name: 'Djibouti', code: 253, example: '77 83 10 01' },
    dm: { addr: 'dm', name: 'Dominica', code: 1767, example: '(767) 225-1234' },
    do: { addr: 'do', name: 'Dominican Republic (República Dominicana)', code: 1, example: '(809) 234-5678' },
    ec: { addr: 'ec', name: 'Ecuador', code: 593, example: '099 123 4567' },
    eg: { addr: 'eg', name: 'Egypt (‫مصر‬‎)', code: 20, example: '0100 123 4567' },
    sv: { addr: 'sv', name: 'El Salvador', code: 503, example: '7012 3456' },
    gq: { addr: 'gq', name: 'Equatorial Guinea (Guinea Ecuatorial)', code: 240, example: '222 123 456' },
    er: { addr: 'er', name: 'Eritrea', code: 291, example: '07 123 456' },
    ee: { addr: 'ee', name: 'Estonia (Eesti)', code: 372, example: '5123 4567' },
    et: { addr: 'et', name: 'Ethiopia', code: 251, example: '091 123 4567' },
    fk: { addr: 'fk', name: 'Falkland Islands (Islas Malvinas)', code: 500, example: '51234' },
    fo: { addr: 'fo', name: 'Faroe Islands (Føroyar)', code: 298, example: '211234' },
    fj: { addr: 'fj', name: 'Fiji', code: 679, example: '701 2345' },
    fi: { addr: 'fi', name: 'Finland (Suomi)', code: 358, example: '041 2345678' },
    fr: { addr: 'fr', name: 'France', code: 33, example: '06 12 34 56 78' },
    gf: { addr: 'gf', name: 'French Guiana (Guyane française)', code: 594, example: '0694 20 12 34' },
    pf: { addr: 'pf', name: 'French Polynesia (Polynésie française)', code: 689, example: '87 12 34 56' },
    ga: { addr: 'ga', name: 'Gabon', code: 241, example: '06 03 12 34' },
    gm: { addr: 'gm', name: 'Gambia', code: 220, example: '301 2345' },
    ge: { addr: 'ge', name: 'Georgia (საქართველო)', code: 995, example: '555 12 34 56' },
    de: { addr: 'de', name: 'Germany (Deutschland)', code: 49, example: '01512 3456789' },
    gh: { addr: 'gh', name: 'Ghana (Gaana)', code: 233, example: '023 123 4567' },
    gi: { addr: 'gi', name: 'Gibraltar', code: 350, example: '57123456' },
    gr: { addr: 'gr', name: 'Greece (Ελλάδα)', code: 30, example: '691 234 5678' },
    gl: { addr: 'gl', name: 'Greenland (Kalaallit Nunaat)', code: 299, example: '22 12 34' },
    gd: { addr: 'gd', name: 'Grenada', code: 1473, example: '(473) 403-1234' },
    gp: { addr: 'gp', name: 'Guadeloupe', code: 590, example: '0690 30-1234' },
    gu: { addr: 'gu', name: 'Guam', code: 1671, example: '(671) 300-1234' },
    gt: { addr: 'gt', name: 'Guatemala', code: 502, example: '5123 4567' },
    gg: { addr: 'gg', name: 'Guernsey', code: 44, example: '07781 123456' },
    gn: { addr: 'gn', name: 'Guinea (Guinée)', code: 224, example: '601 12 34 56' },
    gw: { addr: 'gw', name: 'Guinea-Bissau (Guiné Bissau)', code: 245, example: '955 012 345' },
    gy: { addr: 'gy', name: 'Guyana', code: 592, example: '609 1234' },
    ht: { addr: 'ht', name: 'Haiti', code: 509, example: '34 10 1234' },
    hn: { addr: 'hn', name: 'Honduras', code: 504, example: '9123-4567' },
    hk: { addr: 'hk', name: 'Hong Kong (香港)', code: 852, example: '5123 4567' },
    hu: { addr: 'hu', name: 'Hungary (Magyarország)', code: 36, example: '(20) 123 4567' },
    is: { addr: 'is', name: 'Iceland (Ísland)', code: 354, example: '611 1234' },
    in: { addr: 'in', name: 'India (भारत)', code: 91, example: '099876 54321' },
    id: { addr: 'id', name: 'Indonesia', code: 62, example: '0812-345-678' },
    ir: { addr: 'ir', name: 'Iran (‫ایران‬‎)', code: 98, example: '0912 345 6789' },
    iq: { addr: 'iq', name: 'Iraq (‫العراق‬‎)', code: 964, example: '0791 234 5678' },
    ie: { addr: 'ie', name: 'Ireland', code: 353, example: '085 012 3456' },
    im: { addr: 'im', name: 'Isle of Man', code: 44, example: '07924 123456' },
    il: { addr: 'il', name: 'Israel (‫ישראל‬‎)', code: 972, example: '050-123-4567' },
    it: { addr: 'it', name: 'Italy (Italia)', code: 39, example: '312 345 6789' },
    jm: { addr: 'jm', name: 'Jamaica', code: 1876, example: '(876) 210-1234' },
    jp: { addr: 'jp', name: 'Japan (日本)', code: 81, example: '090-1234-5678' },
    je: { addr: 'je', name: 'Jersey', code: 44, example: '07797 123456' },
    jo: { addr: 'jo', name: 'Jordan (‫الأردن‬‎)', code: 962, example: '07 9012 3456' },
    kz: { addr: 'kz', name: 'Kazakhstan (Казахстан)', code: 7, example: '8 (771) 000 9998' },
    ke: { addr: 'ke', name: 'Kenya', code: 254, example: '0712 123456' },
    ki: { addr: 'ki', name: 'Kiribati', code: 686, example: '72012345' },
    xk: { addr: 'xk', name: 'Kosovo', code: 383, example: '' },
    kw: { addr: 'kw', name: 'Kuwait (‫الكويت‬‎)', code: 965, example: '500 12345' },
    kg: { addr: 'kg', name: 'Kyrgyzstan (Кыргызстан)', code: 996, example: '0700 123 456' },
    la: { addr: 'la', name: 'Laos (ລາວ)', code: 856, example: '020 23 123 456' },
    lv: { addr: 'lv', name: 'Latvia (Latvija)', code: 371, example: '21 234 567' },
    lb: { addr: 'lb', name: 'Lebanon (‫لبنان‬‎)', code: 961, example: '71 123 456' },
    ls: { addr: 'ls', name: 'Lesotho', code: 266, example: '5012 3456' },
    lr: { addr: 'lr', name: 'Liberia', code: 231, example: '077 012 3456' },
    ly: { addr: 'ly', name: 'Libya (‫ليبيا‬‎)', code: 218, example: '091-2345678' },
    li: { addr: 'li', name: 'Liechtenstein', code: 423, example: '660 234 567' },
    lt: { addr: 'lt', name: 'Lithuania (Lietuva)', code: 370, example: '(8-612) 34567' },
    lu: { addr: 'lu', name: 'Luxembourg', code: 352, example: '628 123 456' },
    mo: { addr: 'mo', name: 'Macau (澳門)', code: 853, example: '6612 3456' },
    mk: { addr: 'mk', name: 'Macedonia (FYROM) (Македонија)', code: 389, example: '072 345 678' },
    mg: { addr: 'mg', name: 'Madagascar (Madagasikara)', code: 261, example: '032 12 345 67' },
    mw: { addr: 'mw', name: 'Malawi', code: 265, example: '0991 23 45 67' },
    my: { addr: 'my', name: 'Malaysia', code: 60, example: '012-345 6789' },
    mv: { addr: 'mv', name: 'Maldives', code: 960, example: '771-2345' },
    ml: { addr: 'ml', name: 'Mali', code: 223, example: '65 01 23 45' },
    mt: { addr: 'mt', name: 'Malta', code: 356, example: '9696 1234' },
    mh: { addr: 'mh', name: 'Marshall Islands', code: 692, example: '235-1234' },
    mq: { addr: 'mq', name: 'Martinique', code: 596, example: '0696 20 12 34' },
    mr: { addr: 'mr', name: 'Mauritania (‫موريتانيا‬‎)', code: 222, example: '22 12 34 56' },
    mu: { addr: 'mu', name: 'Mauritius (Moris)', code: 230, example: '5251 2345' },
    yt: { addr: 'yt', name: 'Mayotte', code: 262, example: '0639 12 34 56' },
    mx: { addr: 'mx', name: 'Mexico (México)', code: 52, example: '044 222 123 4567' },
    fm: { addr: 'fm', name: 'Micronesia', code: 691, example: '350 1234' },
    md: { addr: 'md', name: 'Moldova (Republica Moldova)', code: 373, example: '0621 12 345' },
    mc: { addr: 'mc', name: 'Monaco', code: 377, example: '06 12 34 56 78' },
    mn: { addr: 'mn', name: 'Mongolia (Монгол)', code: 976, example: '8812 3456' },
    me: { addr: 'me', name: 'Montenegro (Crna Gora)', code: 382, example: '067 622 901' },
    ms: { addr: 'ms', name: 'Montserrat', code: 1664, example: '(664) 492-3456' },
    ma: { addr: 'ma', name: 'Morocco (‫المغرب‬‎)', code: 212, example: '0650-123456' },
    mz: { addr: 'mz', name: 'Mozambique (Moçambique)', code: 258, example: '82 123 4567' },
    mm: { addr: 'mm', name: 'Myanmar (Burma) (မြန်မာ)', code: 95, example: '09 212 3456' },
    na: { addr: 'na', name: 'Namibia (Namibië)', code: 264, example: '081 123 4567' },
    nr: { addr: 'nr', name: 'Nauru', code: 674, example: '555 1234' },
    np: { addr: 'np', name: 'Nepal (नेपाल)', code: 977, example: '984-1234567' },
    nl: { addr: 'nl', name: 'Netherlands (Nederland)', code: 31, example: '06 12345678' },
    nc: { addr: 'nc', name: 'New Caledonia (Nouvelle-Calédonie)', code: 687, example: '75.12.34' },
    nz: { addr: 'nz', name: 'New Zealand', code: 64, example: '021 123 4567' },
    ni: { addr: 'ni', name: 'Nicaragua', code: 505, example: '8123 4567' },
    ne: { addr: 'ne', name: 'Niger (Nijar)', code: 227, example: '93 12 34 56' },
    ng: { addr: 'ng', name: 'Nigeria', code: 234, example: '0802 123 4567' },
    nu: { addr: 'nu', name: 'Niue', code: 683, example: '1234' },
    nf: { addr: 'nf', name: 'Norfolk Island', code: 672, example: '3 81234' },
    kp: { addr: 'kp', name: 'North Korea (조선 민주주의 인민 공화국)', code: 850, example: '0192 123 4567' },
    mp: { addr: 'mp', name: 'Northern Mariana Islands', code: 1670, example: '(670) 234-5678' },
    no: { addr: 'no', name: 'Norway (Norge)', code: 47, example: '406 12 345' },
    om: { addr: 'om', name: 'Oman (‫عُمان‬‎)', code: 968, example: '9212 3456' },
    pk: { addr: 'pk', name: 'Pakistan (‫پاکستان‬‎)', code: 92, example: '0301 2345678' },
    pw: { addr: 'pw', name: 'Palau', code: 680, example: '620 1234' },
    ps: { addr: 'ps', name: 'Palestine (‫فلسطين‬‎)', code: 970, example: '0599 123 456' },
    pa: { addr: 'pa', name: 'Panama (Panamá)', code: 507, example: '6001-2345' },
    pg: { addr: 'pg', name: 'Papua New Guinea', code: 675, example: '681 2345' },
    py: { addr: 'py', name: 'Paraguay', code: 595, example: '0961 456789' },
    pe: { addr: 'pe', name: 'Peru (Perú)', code: 51, example: '912 345 678' },
    ph: { addr: 'ph', name: 'Philippines', code: 63, example: '0905 123 4567' },
    pl: { addr: 'pl', name: 'Poland (Polska)', code: 48, example: '512 345 678' },
    pt: { addr: 'pt', name: 'Portugal', code: 351, example: '912 345 678' },
    pr: { addr: 'pr', name: 'Puerto Rico', code: 1, example: '(787) 234-5678' },
    qa: { addr: 'qa', name: 'Qatar (‫قطر‬‎)', code: 974, example: '3312 3456' },
    re: { addr: 're', name: 'Réunion (La Réunion)', code: 262, example: '0692 12 34 56' },
    ro: { addr: 'ro', name: 'Romania (România)', code: 40, example: '0712 345 678' },
    ru: { addr: 'ru', name: 'Russia (Россия)', code: 7, example: '8 (912) 345-67-89' },
    rw: { addr: 'rw', name: 'Rwanda', code: 250, example: '0720 123 456' },
    bl: { addr: 'bl', name: 'Saint Barthélemy (Saint-Barthélemy)', code: 590, example: '0690 30-1234' },
    sh: { addr: 'sh', name: 'Saint Helena', code: 290, example: '51234' },
    kn: { addr: 'kn', name: 'Saint Kitts and Nevis', code: 1869, example: '(869) 765-2917' },
    lc: { addr: 'lc', name: 'Saint Lucia', code: 1758, example: '(758) 284-5678' },
    mf: { addr: 'mf', name: 'Saint Martin (Saint-Martin (partie française))', code: 590, example: '0690 30-1234' },
    pm: { addr: 'pm', name: 'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', code: 508, example: '055 12 34' },
    vc: { addr: 'vc', name: 'Saint Vincent and the Grenadines', code: 1784, example: '(784) 430-1234' },
    ws: { addr: 'ws', name: 'Samoa', code: 685, example: '601234' },
    sm: { addr: 'sm', name: 'San Marino', code: 378, example: '66 66 12 12' },
    st: { addr: 'st', name: 'São Tomé and Príncipe (São Tomé e Príncipe)', code: 239, example: '981 2345' },
    sa: { addr: 'sa', name: 'Saudi Arabia (‫المملكة العربية السعودية‬‎)', code: 966, example: '051 234 5678' },
    sn: { addr: 'sn', name: 'Senegal (Sénégal)', code: 221, example: '70 123 45 67' },
    rs: { addr: 'rs', name: 'Serbia (Србија)', code: 381, example: '060 1234567' },
    sc: { addr: 'sc', name: 'Seychelles', code: 248, example: '2 510 123' },
    sl: { addr: 'sl', name: 'Sierra Leone', code: 232, example: '(025) 123456' },
    sg: { addr: 'sg', name: 'Singapore', code: 65, example: '8123 4567' },
    sx: { addr: 'sx', name: 'Sint Maarten', code: 1721, example: '(721) 520-5678' },
    sk: { addr: 'sk', name: 'Slovakia (Slovensko)', code: 421, example: '0912 123 456' },
    si: { addr: 'si', name: 'Slovenia (Slovenija)', code: 386, example: '031 234 567' },
    sb: { addr: 'sb', name: 'Solomon Islands', code: 677, example: '74 21234' },
    so: { addr: 'so', name: 'Somalia (Soomaaliya)', code: 252, example: '7 1123456' },
    za: { addr: 'za', name: 'South Africa', code: 27, example: '071 123 4567' },
    kr: { addr: 'kr', name: 'South Korea (대한민국)', code: 82, example: '010-0000-0000' },
    ss: { addr: 'ss', name: 'South Sudan (‫جنوب السودان‬‎)', code: 211, example: '0977 123 456' },
    es: { addr: 'es', name: 'Spain (España)', code: 34, example: '612 34 56 78' },
    lk: { addr: 'lk', name: 'Sri Lanka (ශ්‍රී ලංකාව)', code: 94, example: '071 234 5678' },
    sd: { addr: 'sd', name: 'Sudan (‫السودان‬‎)', code: 249, example: '091 123 1234' },
    sr: { addr: 'sr', name: 'Suriname', code: 597, example: '741-2345' },
    sj: { addr: 'sj', name: 'Svalbard and Jan Mayen', code: 47, example: '412 34 567' },
    sz: { addr: 'sz', name: 'Swaziland', code: 268, example: '7612 3456' },
    se: { addr: 'se', name: 'Sweden (Sverige)', code: 46, example: '070-123 45 67' },
    ch: { addr: 'ch', name: 'Switzerland (Schweiz)', code: 41, example: '078 123 45 67' },
    sy: { addr: 'sy', name: 'Syria (‫سوريا‬‎)', code: 963, example: '0944 567 890' },
    tw: { addr: 'tw', name: 'Taiwan (台灣)', code: 886, example: '0912 345 678' },
    tj: { addr: 'tj', name: 'Tajikistan', code: 992, example: '(8) 917 12 3456' },
    tz: { addr: 'tz', name: 'Tanzania', code: 255, example: '0621 234 567' },
    th: { addr: 'th', name: 'Thailand (ไทย)', code: 66, example: '081 234 5678' },
    tl: { addr: 'tl', name: 'Timor-Leste', code: 670, example: '7721 2345' },
    tg: { addr: 'tg', name: 'Togo', code: 228, example: '90 11 23 45' },
    tk: { addr: 'tk', name: 'Tokelau', code: 690, example: '7290' },
    to: { addr: 'to', name: 'Tonga', code: 676, example: '771 5123' },
    tt: { addr: 'tt', name: 'Trinidad and Tobago', code: 1868, example: '(868) 291-1234' },
    tn: { addr: 'tn', name: 'Tunisia (‫تونس‬‎)', code: 216, example: '20 123 456' },
    tr: { addr: 'tr', name: 'Turkey (Türkiye)', code: 90, example: '0501 234 56 78' },
    tm: { addr: 'tm', name: 'Turkmenistan', code: 993, example: '8 66 123456' },
    tc: { addr: 'tc', name: 'Turks and Caicos Islands', code: 1649, example: '(649) 231-1234' },
    tv: { addr: 'tv', name: 'Tuvalu', code: 688, example: '901234' },
    us: { addr: 'us', name: 'United States', code: 1, example: '(201) 555-0123' },
    gb: { addr: 'gb', name: 'United Kingdom', code: 44, example: '07400 123456' },
    vi: { addr: 'vi', name: 'U.S. Virgin Islands', code: 1340, example: '(340) 642-1234' },
    ug: { addr: 'ug', name: 'Uganda', code: 256, example: '0712 345678' },
    ua: { addr: 'ua', name: 'Ukraine (Україна)', code: 380, example: '039 123 4567' },
    ae: { addr: 'ae', name: 'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', code: 971, example: '050 123 4567' },
    uy: { addr: 'uy', name: 'Uruguay', code: 598, example: '094 231 234' },
    uz: { addr: 'uz', name: 'Uzbekistan (Oʻzbekiston)', code: 998, example: '8 91 234 56 78' },
    vu: { addr: 'vu', name: 'Vanuatu', code: 678, example: '591 2345' },
    va: { addr: 'va', name: 'Vatican City (Città del Vaticano)', code: 39, example: '312 345 6789' },
    ve: { addr: 've', name: 'Venezuela', code: 58, example: '0412-1234567' },
    vn: { addr: 'vn', name: 'Vietnam (Việt Nam)', code: 84, example: '091 234 56 78' },
    wf: { addr: 'wf', name: 'Wallis and Futuna', code: 681, example: '50 12 34' },
    eh: { addr: 'eh', name: 'Western Sahara (‫الصحراء الغربية‬‎)', code: 212, example: '0650-123456' },
    ye: { addr: 'ye', name: 'Yemen (‫اليمن‬‎)', code: 967, example: '0712 345 678' },
    zm: { addr: 'zm', name: 'Zambia', code: 260, example: '095 5123456' },
    zw: { addr: 'zw', name: 'Zimbabwe', code: 263, example: '071 123 4567' },
    ax: { addr: 'ax', name: 'Åland Islands', code: 358, example: '041 2345678' },
  }
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  export default {
    name: 'int-tel-input',

		components: {
		},

    props: {
      disabled: Boolean,
      phone: String,
      countryAbbr: {
        type: String,
        default: 'cn'
      },
      placeholder: {
        type: String,
        default: 'Phone number'
      }
    },

    data () {
      return {
        alphabet,
        visible: false,
        filterString: '',
        filterLetter: null
      }
    },
    
		watch: {
      visible (newValue) {
        if (!newValue) return
        const menu = this.$refs.scrollbar
        const selected = menu.querySelector('.selected')
        this.scrollIntoView(menu, selected)
      },
      filterString (newString) {
        if (!!newString) this.filterLetter = null
      }
    },

    computed: {
      selectedInput () {
        let {calculatePhoneData, countryAbbr} = this
        let currentCountry = phonesData[countryAbbr]
        return currentCountry ? `${currentCountry.addr.toUpperCase()} +${currentCountry.code}` : ''
      },
      calculatePhoneData () {
        if (!this.filterString && !this.filterLetter) return phonesData

        let filter = this.filterString || `^${this.filterLetter}`
        const arr = this.filterString ? ['addr', 'name', 'code'] : ['name']

        let reg = new RegExp(`${filter}`, 'i')
        let obj = {}
        for (const key in phonesData) {
          arr.forEach(i => {
            if (reg.test(phonesData[key][i])) {
              obj[key] = phonesData[key]
            }
          })
        }
        return obj
      }
    },

    methods: {
      alphabetClickHandle (letter) {
        this.filterLetter = this.filterLetter === letter ? null : letter
        this.filterString = ''
      },
      scrollIntoView (container, selected) {
        if (!selected) {
          container.scrollTop = 0
          return
        }

        this.$nextTick(() => {
          const containerOffsetTop = container.offsetTop
          const selectOffsetTop = selected.offsetTop
          const containerClientHeight = container.clientHeight

          const top = selectOffsetTop
          
          const bottom = selectOffsetTop + selected.offsetHeight
          const viewRectTop = container.scrollTop
          const viewRectBottom = viewRectTop + containerClientHeight
          if (top < viewRectTop) {
            container.scrollTop = top - containerOffsetTop
          } else if (bottom > viewRectBottom) {
            container.scrollTop = bottom - containerClientHeight - containerOffsetTop
          }
        })
      },
      selectInputClickHandle () {
        if (this.disabled) return
        if (this.visible) {
          this.visible = false
          this.$refs.selectInput.blur()
        } else {
          this.visible = true
          this.$refs.selectInput.focus()
        }
      },
      selectOptionHandle (value, key) {
        let {addr, code, name} = value
        this.visible = false
        this.$emit('country-change', {addr, code, name})
      },
      phoneInputHandel (event) {
        this.$emit('phone-change', event.target.value)
      },
      documentClickHandle (e) {
        if (!this.visible) return
        if (this.$refs.select.contains(e.target)) return
        if (!this.$refs.selectDropdown.contains(e.target)) {
          this.visible = false
        }
      }
    },

    mounted() {
      let {addr, code, name} = phonesData[this.countryAbbr]
      this.$emit('country-change', {addr, code, name})
      document.addEventListener('click', this.documentClickHandle)
    },

    beforeDestroy () {
      document.removeEventListener('click', this.documentClickHandle)
    }
  }
</script>

<style>
  p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  ul, ol {
    list-style: none;
  }

  .clear::after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
</style>

<style lang="stylus" scoped>
  &.ac 
    height: 10px;
    background-position: 0px 0px;
  
  &.ad 
    height: 14px;
    background-position: -22px 0px;
  
  &.ae 
    height: 10px;
    background-position: -44px 0px;
  
  &.af 
    height: 14px;
    background-position: -66px 0px;
  
  &.ag 
    height: 14px;
    background-position: -88px 0px;
  
  &.ai 
    height: 10px;
    background-position: -110px 0px;
  
  &.al 
    height: 15px;
    background-position: -132px 0px;
  
  &.am 
    height: 10px;
    background-position: -154px 0px;
  
  &.ao 
    height: 14px;
    background-position: -176px 0px;
  
  &.aq 
    height: 14px;
    background-position: -198px 0px;
  
  &.ar 
    height: 13px;
    background-position: -220px 0px;
  
  &.as 
    height: 10px;
    background-position: -242px 0px;
  
  &.at 
    height: 14px;
    background-position: -264px 0px;
  
  &.au 
    height: 10px;
    background-position: -286px 0px;
  
  &.aw 
    height: 14px;
    background-position: -308px 0px;
  
  &.ax 
    height: 13px;
    background-position: -330px 0px;
  
  &.az 
    height: 10px;
    background-position: -352px 0px;
  
  &.ba 
    height: 10px;
    background-position: -374px 0px;
  
  &.bb 
    height: 14px;
    background-position: -396px 0px;
  
  &.bd 
    height: 12px;
    background-position: -418px 0px;
  
  &.be 
    height: 15px;
    background-position: -440px 0px;
  
  &.bf 
    height: 14px;
    background-position: -460px 0px;
  
  &.bg 
    height: 12px;
    background-position: -482px 0px;
  
  &.bh 
    height: 12px;
    background-position: -504px 0px;
  
  &.bi 
    height: 12px;
    background-position: -526px 0px;
  
  &.bj 
    height: 14px;
    background-position: -548px 0px;
  
  &.bl 
    height: 14px;
    background-position: -570px 0px;
  
  &.bm 
    height: 10px;
    background-position: -592px 0px;
  
  &.bn 
    height: 10px;
    background-position: -614px 0px;
  
  &.bo 
    height: 14px;
    background-position: -636px 0px;
  
  &.bq 
    height: 14px;
    background-position: -658px 0px;
  
  &.br 
    height: 14px;
    background-position: -680px 0px;
  
  &.bs 
    height: 10px;
    background-position: -702px 0px;
  
  &.bt 
    height: 14px;
    background-position: -724px 0px;
  
  &.bv 
    height: 15px;
    background-position: -746px 0px;
  
  &.bw 
    height: 14px;
    background-position: -768px 0px;
  
  &.by 
    height: 10px;
    background-position: -790px 0px;
  
  &.bz 
    height: 14px;
    background-position: -812px 0px;
  
  &.ca 
    height: 10px;
    background-position: -834px 0px;
  
  &.cc 
    height: 10px;
    background-position: -856px 0px;
  
  &.cd 
    height: 15px;
    background-position: -878px 0px;
  
  &.cf 
    height: 14px;
    background-position: -900px 0px;
  
  &.cg 
    height: 14px;
    background-position: -922px 0px;
  
  &.ch 
    height: 15px;
    background-position: -944px 0px;
  
  &.ci 
    height: 14px;
    background-position: -961px 0px;
  
  &.ck 
    height: 10px;
    background-position: -983px 0px;
  
  &.cl 
    height: 14px;
    background-position: -1005px 0px;
  
  &.cm 
    height: 14px;
    background-position: -1027px 0px;
  
  &.cn 
    height: 14px;
    background-position: -1049px 0px;
  
  &.co 
    height: 14px;
    background-position: -1071px 0px;
  
  &.cp 
    height: 14px;
    background-position: -1093px 0px;
  
  &.cr 
    height: 12px;
    background-position: -1115px 0px;
  
  &.cu 
    height: 10px;
    background-position: -1137px 0px;
  
  &.cv 
    height: 12px;
    background-position: -1159px 0px;
  
  &.cw 
    height: 14px;
    background-position: -1181px 0px;
  
  &.cx 
    height: 10px;
    background-position: -1203px 0px;
  
  &.cy 
    height: 13px;
    background-position: -1225px 0px;
  
  &.cz 
    height: 14px;
    background-position: -1247px 0px;
  
  &.de 
    height: 12px;
    background-position: -1269px 0px;
  
  &.dg 
    height: 10px;
    background-position: -1291px 0px;
  
  &.dj 
    height: 14px;
    background-position: -1313px 0px;
  
  &.dk 
    height: 15px;
    background-position: -1335px 0px;
  
  &.dm 
    height: 10px;
    background-position: -1357px 0px;
  
  &.do 
    height: 13px;
    background-position: -1379px 0px;
  
  &.dz 
    height: 14px;
    background-position: -1401px 0px;
  
  &.ea 
    height: 14px;
    background-position: -1423px 0px;
  
  &.ec 
    height: 14px;
    background-position: -1445px 0px;
  
  &.ee 
    height: 13px;
    background-position: -1467px 0px;
  
  &.eg 
    height: 14px;
    background-position: -1489px 0px;
  
  &.eh 
    height: 10px;
    background-position: -1511px 0px;
  
  &.er 
    height: 10px;
    background-position: -1533px 0px;
  
  &.es 
    height: 14px;
    background-position: -1555px 0px;
  
  &.et 
    height: 10px;
    background-position: -1577px 0px;
  
  &.eu 
    height: 14px;
    background-position: -1599px 0px;
  
  &.fi 
    height: 12px;
    background-position: -1621px 0px;
  
  &.fj 
    height: 10px;
    background-position: -1643px 0px;
  
  &.fk 
    height: 10px;
    background-position: -1665px 0px;
  
  &.fm 
    height: 11px;
    background-position: -1687px 0px;
  
  &.fo 
    height: 15px;
    background-position: -1709px 0px;
  
  &.fr 
    height: 14px;
    background-position: -1731px 0px;
  
  &.ga 
    height: 15px;
    background-position: -1753px 0px;
  
  &.gb 
    height: 10px;
    background-position: -1775px 0px;
  
  &.gd 
    height: 12px;
    background-position: -1797px 0px;
  
  &.ge 
    height: 14px;
    background-position: -1819px 0px;
  
  &.gf 
    height: 14px;
    background-position: -1841px 0px;
  
  &.gg 
    height: 14px;
    background-position: -1863px 0px;
  
  &.gh 
    height: 14px;
    background-position: -1885px 0px;
  
  &.gi 
    height: 10px;
    background-position: -1907px 0px;
  
  &.gl 
    height: 14px;
    background-position: -1929px 0px;
  
  &.gm 
    height: 14px;
    background-position: -1951px 0px;
  
  &.gn 
    height: 14px;
    background-position: -1973px 0px;
  
  &.gp 
    height: 14px;
    background-position: -1995px 0px;
  
  &.gq 
    height: 14px;
    background-position: -2017px 0px;
  
  &.gr 
    height: 14px;
    background-position: -2039px 0px;
  
  &.gs 
    height: 10px;
    background-position: -2061px 0px;
  
  &.gt 
    height: 13px;
    background-position: -2083px 0px;
  
  &.gu 
    height: 11px;
    background-position: -2105px 0px;
  
  &.gw 
    height: 10px;
    background-position: -2127px 0px;
  
  &.gy 
    height: 12px;
    background-position: -2149px 0px;
  
  &.hk 
    height: 14px;
    background-position: -2171px 0px;
  
  &.hm 
    height: 10px;
    background-position: -2193px 0px;
  
  &.hn 
    height: 10px;
    background-position: -2215px 0px;
  
  &.hr 
    height: 10px;
    background-position: -2237px 0px;
  
  &.ht 
    height: 12px;
    background-position: -2259px 0px;
  
  &.hu 
    height: 10px;
    background-position: -2281px 0px;
  
  &.ic 
    height: 14px;
    background-position: -2303px 0px;
  
  &.id 
    height: 14px;
    background-position: -2325px 0px;
  
  &.ie 
    height: 10px;
    background-position: -2347px 0px;
  
  &.il 
    height: 15px;
    background-position: -2369px 0px;
  
  &.im 
    height: 10px;
    background-position: -2391px 0px;
  
  &.in 
    height: 14px;
    background-position: -2413px 0px;
  
  &.io 
    height: 10px;
    background-position: -2435px 0px;
  
  &.iq 
    height: 14px;
    background-position: -2457px 0px;
  
  &.ir 
    height: 12px;
    background-position: -2479px 0px;
  
  &.is 
    height: 15px;
    background-position: -2501px 0px;
  
  &.it 
    height: 14px;
    background-position: -2523px 0px;
  
  &.je 
    height: 12px;
    background-position: -2545px 0px;
  
  &.jm 
    height: 10px;
    background-position: -2567px 0px;
  
  &.jo 
    height: 10px;
    background-position: -2589px 0px;
  
  &.jp 
    height: 14px;
    background-position: -2611px 0px;
  
  &.ke 
    height: 14px;
    background-position: -2633px 0px;
  
  &.kg 
    height: 12px;
    background-position: -2655px 0px;
  
  &.kh 
    height: 13px;
    background-position: -2677px 0px;
  
  &.ki 
    height: 10px;
    background-position: -2699px 0px;
  
  &.km 
    height: 12px;
    background-position: -2721px 0px;
  
  &.kn 
    height: 14px;
    background-position: -2743px 0px;
  
  &.kp 
    height: 10px;
    background-position: -2765px 0px;
  
  &.kr 
    height: 14px;
    background-position: -2787px 0px;
  
  &.kw 
    height: 10px;
    background-position: -2809px 0px;
  
  &.ky 
    height: 10px;
    background-position: -2831px 0px;
  
  &.kz 
    height: 10px;
    background-position: -2853px 0px;
  
  &.la 
    height: 14px;
    background-position: -2875px 0px;
  
  &.lb 
    height: 14px;
    background-position: -2897px 0px;
  
  &.lc 
    height: 10px;
    background-position: -2919px 0px;
  
  &.li 
    height: 12px;
    background-position: -2941px 0px;
  
  &.lk 
    height: 10px;
    background-position: -2963px 0px;
  
  &.lr 
    height: 11px;
    background-position: -2985px 0px;
  
  &.ls 
    height: 14px;
    background-position: -3007px 0px;
  
  &.lt 
    height: 12px;
    background-position: -3029px 0px;
  
  &.lu 
    height: 12px;
    background-position: -3051px 0px;
  
  &.lv 
    height: 10px;
    background-position: -3073px 0px;
  
  &.ly 
    height: 10px;
    background-position: -3095px 0px;
  
  &.ma 
    height: 14px;
    background-position: -3117px 0px;
  
  &.mc 
    height: 15px;
    background-position: -3139px 0px;
  
  &.md 
    height: 10px;
    background-position: -3160px 0px;
  
  &.me 
    height: 10px;
    background-position: -3182px 0px;
  
  &.mf 
    height: 14px;
    background-position: -3204px 0px;
  
  &.mg 
    height: 14px;
    background-position: -3226px 0px;
  
  &.mh 
    height: 11px;
    background-position: -3248px 0px;
  
  &.mk 
    height: 10px;
    background-position: -3270px 0px;
  
  &.ml 
    height: 14px;
    background-position: -3292px 0px;
  
  &.mm 
    height: 14px;
    background-position: -3314px 0px;
  
  &.mn 
    height: 10px;
    background-position: -3336px 0px;
  
  &.mo 
    height: 14px;
    background-position: -3358px 0px;
  
  &.mp 
    height: 10px;
    background-position: -3380px 0px;
  
  &.mq 
    height: 14px;
    background-position: -3402px 0px;
  
  &.mr 
    height: 14px;
    background-position: -3424px 0px;
  
  &.ms 
    height: 10px;
    background-position: -3446px 0px;
  
  &.mt 
    height: 14px;
    background-position: -3468px 0px;
  
  &.mu 
    height: 14px;
    background-position: -3490px 0px;
  
  &.mv 
    height: 14px;
    background-position: -3512px 0px;
  
  &.mw 
    height: 14px;
    background-position: -3534px 0px;
  
  &.mx 
    height: 12px;
    background-position: -3556px 0px;
  
  &.my 
    height: 10px;
    background-position: -3578px 0px;
  
  &.mz 
    height: 14px;
    background-position: -3600px 0px;
  
  &.na 
    height: 14px;
    background-position: -3622px 0px;
  
  &.nc 
    height: 10px;
    background-position: -3644px 0px;
  
  &.ne 
    height: 15px;
    background-position: -3666px 0px;
  
  &.nf 
    height: 10px;
    background-position: -3686px 0px;
  
  &.ng 
    height: 10px;
    background-position: -3708px 0px;
  
  &.ni 
    height: 12px;
    background-position: -3730px 0px;
  
  &.nl 
    height: 14px;
    background-position: -3752px 0px;
  
  &.no 
    height: 15px;
    background-position: -3774px 0px;
  
  &.np 
    height: 15px;
    background-position: -3796px 0px;
  
  &.nr 
    height: 10px;
    background-position: -3811px 0px;
  
  &.nu 
    height: 10px;
    background-position: -3833px 0px;
  
  &.nz 
    height: 10px;
    background-position: -3855px 0px;
  
  &.om 
    height: 10px;
    background-position: -3877px 0px;
  
  &.pa 
    height: 14px;
    background-position: -3899px 0px;
  
  &.pe 
    height: 14px;
    background-position: -3921px 0px;
  
  &.pf 
    height: 14px;
    background-position: -3943px 0px;
  
  &.pg 
    height: 15px;
    background-position: -3965px 0px;
  
  &.ph 
    height: 10px;
    background-position: -3987px 0px;
  
  &.pk 
    height: 14px;
    background-position: -4009px 0px;
  
  &.pl 
    height: 13px;
    background-position: -4031px 0px;
  
  &.pm 
    height: 14px;
    background-position: -4053px 0px;
  
  &.pn 
    height: 10px;
    background-position: -4075px 0px;
  
  &.pr 
    height: 14px;
    background-position: -4097px 0px;
  
  &.ps 
    height: 10px;
    background-position: -4119px 0px;
  
  &.pt 
    height: 14px;
    background-position: -4141px 0px;
  
  &.pw 
    height: 13px;
    background-position: -4163px 0px;
  
  &.py 
    height: 11px;
    background-position: -4185px 0px;
  
  &.qa 
    height: 8px;
    background-position: -4207px 0px;
  
  &.re 
    height: 14px;
    background-position: -4229px 0px;
  
  &.ro 
    height: 14px;
    background-position: -4251px 0px;
  
  &.rs 
    height: 14px;
    background-position: -4273px 0px;
  
  &.ru 
    height: 14px;
    background-position: -4295px 0px;
  
  &.rw 
    height: 14px;
    background-position: -4317px 0px;
  
  &.sa 
    height: 14px;
    background-position: -4339px 0px;
  
  &.sb 
    height: 10px;
    background-position: -4361px 0px;
  
  &.sc 
    height: 10px;
    background-position: -4383px 0px;
  
  &.sd 
    height: 10px;
    background-position: -4405px 0px;
  
  &.se 
    height: 13px;
    background-position: -4427px 0px;
  
  &.sg 
    height: 14px;
    background-position: -4449px 0px;
  
  &.sh 
    height: 10px;
    background-position: -4471px 0px;
  
  &.si 
    height: 10px;
    background-position: -4493px 0px;
  
  &.sj 
    height: 15px;
    background-position: -4515px 0px;
  
  &.sk 
    height: 14px;
    background-position: -4537px 0px;
  
  &.sl 
    height: 14px;
    background-position: -4559px 0px;
  
  &.sm 
    height: 15px;
    background-position: -4581px 0px;
  
  &.sn 
    height: 14px;
    background-position: -4603px 0px;
  
  &.so 
    height: 14px;
    background-position: -4625px 0px;
  
  &.sr 
    height: 14px;
    background-position: -4647px 0px;
  
  &.ss 
    height: 10px;
    background-position: -4669px 0px;
  
  &.st 
    height: 10px;
    background-position: -4691px 0px;
  
  &.sv 
    height: 12px;
    background-position: -4713px 0px;
  
  &.sx 
    height: 14px;
    background-position: -4735px 0px;
  
  &.sy 
    height: 14px;
    background-position: -4757px 0px;
  
  &.sz 
    height: 14px;
    background-position: -4779px 0px;
  
  &.ta 
    height: 10px;
    background-position: -4801px 0px;
  
  &.tc 
    height: 10px;
    background-position: -4823px 0px;
  
  &.td 
    height: 14px;
    background-position: -4845px 0px;
  
  &.tf 
    height: 14px;
    background-position: -4867px 0px;
  
  &.tg 
    height: 13px;
    background-position: -4889px 0px;
  
  &.th 
    height: 14px;
    background-position: -4911px 0px;
  
  &.tj 
    height: 10px;
    background-position: -4933px 0px;
  
  &.tk 
    height: 10px;
    background-position: -4955px 0px;
  
  &.tl 
    height: 10px;
    background-position: -4977px 0px;
  
  &.tm 
    height: 14px;
    background-position: -4999px 0px;
  
  &.tn 
    height: 14px;
    background-position: -5021px 0px;
  
  &.to 
    height: 10px;
    background-position: -5043px 0px;
  
  &.tr 
    height: 14px;
    background-position: -5065px 0px;
  
  &.tt 
    height: 12px;
    background-position: -5087px 0px;
  
  &.tv 
    height: 10px;
    background-position: -5109px 0px;
  
  &.tw 
    height: 14px;
    background-position: -5131px 0px;
  
  &.tz 
    height: 14px;
    background-position: -5153px 0px;
  
  &.ua 
    height: 14px;
    background-position: -5175px 0px;
  
  &.ug 
    height: 14px;
    background-position: -5197px 0px;
  
  &.um 
    height: 11px;
    background-position: -5219px 0px;
  
  &.us 
    height: 11px;
    background-position: -5241px 0px;
  
  &.uy 
    height: 14px;
    background-position: -5263px 0px;
  
  &.uz 
    height: 10px;
    background-position: -5285px 0px;
  
  &.va 
    height: 15px;
    background-position: -5307px 0px;
  
  &.vc 
    height: 14px;
    background-position: -5324px 0px;
  
  &.ve 
    height: 14px;
    background-position: -5346px 0px;
  
  &.vg 
    height: 10px;
    background-position: -5368px 0px;
  
  &.vi 
    height: 14px;
    background-position: -5390px 0px;
  
  &.vn 
    height: 14px;
    background-position: -5412px 0px;
  
  &.vu 
    height: 12px;
    background-position: -5434px 0px;
  
  &.wf 
    height: 14px;
    background-position: -5456px 0px;
  
  &.ws 
    height: 10px;
    background-position: -5478px 0px;
  
  &.xk 
    height: 15px;
    background-position: -5500px 0px;
  
  &.ye 
    height: 14px;
    background-position: -5522px 0px;
  
  &.yt 
    height: 14px;
    background-position: -5544px 0px;
  
  &.za 
    height: 14px;
    background-position: -5566px 0px;
  
  &.zm 
    height: 14px;
    background-position: -5588px 0px;
  
  &.zw 
    height: 10px;
    background-position: -5610px 0px;

</style>

<style lang="stylus" scoped>
  $purple = #887bd7
  $defaultColor = #999
  input
    outline none
    border: none
    font-size: inherit
    &::placeholder
      font-size: 14px
      color: $defaultColor
  .int-tel-input-wapper
    position: relative
    font-size: 16px
    padding-left: 120px
    .int-tel-select
      position: relative
      width: 120px
      float: left
      margin-left: -120px
      .int-tel-icon
        position: absolute
        top: 0
        right: 0
        bottom: 0
        width: 35px
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms
        background: url('//unpkg.com/int-tel-input@1.0.6/assets/icon-arrow-down.svg') center no-repeat
        &.is-reverse
          transform: rotate(-180deg)
      > input
        position: relative
        width: 120px
        width: 100%
        height: 38px
        line-height: 38px
        border-bottom-right-radius: 0
        border-top-right-radius: 0
        padding-left: 10px
        padding-right: 35px
        border: 1px solid #c5bfd9
        box-sizing: border-box
        background: transparent
        cursor: pointer
        transition: all 0.2s 0s
        touch-callout: none
        user-select: none
        &:hover, &:focus
          border-color: $purple
          z-index: 1
    .select-dropdown
      position: absolute
      z-index: 2
      top: 100%
      left: 0
      right: 0
      margin-top: -1px
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.067)
      background: #fff
      transform-origin: center top 0px
      .scrollbar__wrap
        border: solid 1px #e0e0e0
        .filter-wapper
          .filter-input
            position: relative
            padding-left: 10px
            padding-right: 35px
            margin-left: -1px
            margin-right: -1px
            border: 1px solid #c9c9c9
            &::after
              position: absolute
              right: 0
              top: 0
              width 34px
              height 34px
              content: ''
              background: url('//unpkg.com/int-tel-input@1.0.6/assets/icon-search.svg') center no-repeat
              cursor: pointer
            input
              width: 100%
              height: 34px
              line-height: 34px
              &::placeholder
                font-size: 12px
          .filter-alphabet
            padding: 5px
            border-bottom: 1px solid #f1f1f1
            p
              float: left
              width: 18px
              height: 18px
              line-height: 18px
              font-size: 14px
              text-align: center
              color: #b8b8b8
              cursor: pointer
            .selected
              color: #857dd1
              background: #ebebf7
              border-radius: 2px
        .scrollbar
          max-height: 200px
          overflow-y: auto
          margin: 0
          padding-top: 5px
          padding-bottom: 10px
          box-sizing: border-box
          li.options
            padding: 4px 10px
            line-height: 20px
            white-space: nowrap
            color: #999
            overflow: hidden
            text-overflow: ellipsis
            cursor: pointer
            touch-callout: none
            user-select: none
            &.no-result
              text-align: center
            &.selected
              color: #212121
              background: #ebebf7
            .int-countries-flag
              display: inline-block
              float: left
              width: 20px
              height: 15px
              background-image: url('//unpkg.com/int-tel-input@1.0.6/assets/flags@2x.png')
              background-repeat: no-repeat
              background-size: 5630px 15px
              background-color: #DBDBDB
              margin-right: 1em
            .int-countries-name
              max-width: 60%
              overflow: hidden
              text-overflow: ellipsis
              float: left
            .int-countries-addr
              float: right
    .int-tel-input
      width: 100%
      float: left
      input
        position: relative
        width: 100%
        height: 38px
        padding-left: 10px
        padding-right: 10px
        line-height: 38px
        border: 1px solid #c5bfd9
        box-sizing: border-box
        border-left-width: 0px
        border-bottom-left-radius: 0
        border-top-left-radius: 0
        transition: all 0.2s 0s
        &:hover, &:focus
          border-color: $purple
          box-shadow: -1px 0px $purple
          z-index: 1

  .zoom-in-top-enter-active,
  .zoom-in-top-leave-active
    transform: scaleY(1)
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms
  .zoom-in-top-enter,
  .zoom-in-top-leave-active
    transform: scaleY(0)
</style>
