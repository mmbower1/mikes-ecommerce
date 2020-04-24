const INITIAL_STATE = {
  sections: [
    {
      title: 'Tinctures',
      imageUrl: 'https://images.unsplash.com/photo-1585216195257-1e24956105c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      id: 1,
      linkUrl: 'tinctures'
    },
    {
      title: 'Edibles',
      imageUrl: 'https://images.unsplash.com/photo-1579911098863-2324d6914c01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      id: 2,
      linkUrl: 'edibles'
    },
    {
      title: 'Topicals',
      imageUrl: 'https://images.unsplash.com/photo-1573171508396-21a51aab334b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      id: 3,
      linkUrl: 'topicals'
    },
    {
      title: 'Capsules',
      imageUrl: 'https://images.unsplash.com/photo-1563483783233-5bada9b67dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      size: 'large',
      id: 4,
      linkUrl: 'capsules'
    },
    {
      title: 'Pets',
      imageUrl: 'https://images.unsplash.com/photo-1562782441-fdc53369e894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      size: 'large',
      id: 6,
      linkUrl: 'pets'
    },
    {
      title: 'Sleep',
      imageUrl: 'https://images.unsplash.com/photo-1583687780174-434f85f826b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1214&q=80',
      size: 'large',
      id: 5,
      linkUrl: 'sleep'
    },
    {
      title: 'Bundles',
      imageUrl: 'https://images.unsplash.com/photo-1571883496609-625e2694bf76?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      size: 'large',
      id: 7,
      linkUrl: 'bundles'
    },
  ]
}

const directory = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default: 
      return state
  }
}

export default directory;