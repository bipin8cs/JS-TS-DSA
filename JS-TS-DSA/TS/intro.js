self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== 'v1')
            .map(key => caches.delete(key))
      );
    })
  );
});
