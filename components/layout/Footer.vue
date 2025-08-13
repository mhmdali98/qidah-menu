<template>
    <footer class="relative z-50 bg-white py-4 dark:bg-[#0e1726]">
        <div class="container mx-auto">
            <div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div class="text-center md:text-left">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        © {{ new Date().getFullYear() }} Qidah Restaurant. All rights reserved.
                    </p>
                </div>
                <div class="flex items-center space-x-4">
                    <a href="#" class="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        Privacy Policy
                    </a>
                    <a href="#" class="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                        Terms of Service
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
// No additional logic needed
</script>
