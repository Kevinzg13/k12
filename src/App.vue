


<template>
  <div>
    <q-toolbar class="bg-primary text-white">


      <q-btn flat round dense icon="menu" color="white" >
      <q-menu
          transition-show="rotate"
          transition-hide="rotate"
        >
          <q-list style="min-width: 100px">
            <q-item clickable href="/casa">
              <q-item-section>home</q-item-section>
            </q-item>
            <q-item clickable href="/Wallet">
              <q-item-section>Wallet Cashonize</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>about</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-avatar>
        <img src="../public/icons/favicon-96x96.png">
      </q-avatar>

      <q-toolbar-title>Investment BCH</q-toolbar-title>


      <q-btn flat round dense label="wallet" icon="wallet" clickable href="/wallet"/>
    </q-toolbar>
  </div>

  <suspense>
    <router-view />
  </suspense>
</template>



