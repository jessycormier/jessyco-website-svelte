<script>
  import DarkModeButton from "$lib/components/DarkModeButton.svelte";
</script>

<div class="container mx-auto px-5">
  <div class="flex items-center content-between">
    <nav class="rounded-md w-full my-10">
      <ol class="list-reset flex">
        <li
          class="dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 font-bold px-2 rounded"
        >
          Index
        </li>
        <!-- <li><span class="text-gray-500 mx-2">/</span></li>
          <li class="dark:bg-gray-50 dark:text-gray-900 bg-gray-900 text-gray-50 font-bold px-2 rounded">
              You're Here Link
          </li> -->
      </ol>
    </nav>

    <DarkModeButton />
  </div>
</div>
