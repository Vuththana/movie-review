<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>

    @vite('resources/css/app.css')
</head>
<body>
    
    <div class="w-[600px] mx-auto border-2">
        <div class="space-x-3 items-center">
            <h1 class="text-4xl font-semibold text-green-800 mt-10 mx-10 float-left">Invoice</h1>
            
            <div class="p-6">
                <form action="">
                    <div class="flex items-end gap-2">
                        <p class="font-semibold text-gray-500">DATE:</p>
                        <input type="date" class="border-dotted border-b-2 border-t-0 border-r-0 border-l-0 w-full"></input>
                    </div>

                    <div class="flex items-end gap-6 mt-2">
                        <p class="font-semibold text-gray-500">No:</p>
                        <input type="text" class="border-dotted border-b-2 border-t-0 border-r-0 border-l-0 w-full" ></input>
                    </div>

                    <div class="flex items-end gap-2 mt-3">
                        <p class="font-semibold text-gray-500">Customer name:</p>
                        <input type="text" class="border-dotted border-b-2 border-t-0 border-r-0 border-l-0 w-full"></input>
                    </div>
                    
                    <div class="flex items-end gap-2 mt-3">
                        <p class="font-semibold text-gray-500">Customer contact:</p>
                        <input type="text" class="border-dotted border-b-2 border-t-0 border-r-0 border-l-0 w-full"></input>
                    </div>
                    
                    <div class="flex items-end gap-2 mt-3">
                        <p class="font-semibold text-gray-500">Location:</p>
                        <input type="text" class="border-dotted border-b-2 border-t-0 border-r-0 border-l-0 w-full"></input>
                    </div>

                </form>
            </div>

            <div class="">

            </div>
        </div>

        <div class="overflow-x-auto">
            <table id="items-table" class="min-w-full border border-gray-200">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2 border-b text-left text-gray-600">No</th>
                        <th class="px-4 py-2 border-b text-left text-gray-600">Items</th>
                        <th class="px-4 py-2 border-b text-right text-gray-600">Qty</th>
                        <th class="px-4 py-2 border-b text-right text-gray-600">Price</th>
                        <th class="px-4 py-2 border-b text-right text-gray-600">Amount</th>
                    </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                    <tr>
                        <td colspan="4" class="px-4 py-2 text-right font-semibold text-gray-800">Delivery Fee</td>
                        <td class="px-4 py-2 text-right text-gray-800" id="delivery-fee">$5.00</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="px-4 py-2 text-right font-semibold text-gray-800">Total</td>
                        <td class="px-4 py-2 text-right font-bold text-gray-800" id="total-amount">$0.00</td>
                    </tr>
                </tfoot>
            </table>

            <div class="mb-4 p-2">
            <div class="grid grid-cols-5 gap-4">
                <input type="text" id="item-name" placeholder="Item Name" class="border px-4 py-2 rounded">
                <input type="number" id="item-qty" placeholder="Qty" class="border px-4 py-2 rounded">
                <input type="number" id="item-price" placeholder="Price" class="border px-4 py-2 rounded">
                <button id="add-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Item</button>
            </div>
        </div>
        </div>

</div>

    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const addItemButton = document.getElementById('add-item');
            const tableBody = document.querySelector('#items-table tbody');
            const totalAmountEl = document.getElementById('total-amount');
            const deliveryFee = 5;
            let totalAmount = 0;

            let itemCount = 0;

            addItemButton.addEventListener('click', () => {
                const itemName = document.getElementById('item-name').value;
                const itemQty = parseInt(document.getElementById('item-qty').value, 10);
                const itemPrice = parseFloat(document.getElementById('item-price').value);

                if (!itemName || isNaN(itemQty) || isNaN(itemPrice)) {
                    alert('Please fill in all fields correctly.');
                    return;
                }

                itemCount++;
                const itemAmount = itemQty * itemPrice;
                totalAmount += itemAmount;

                // Add row to the table
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="px-4 py-2 border-b text-gray-800">${itemCount}</td>
                    <td class="px-4 py-2 border-b text-gray-800">${itemName}</td>
                    <td class="px-4 py-2 border-b text-right text-gray-800">${itemQty}</td>
                    <td class="px-4 py-2 border-b text-right text-gray-800">$${itemPrice.toFixed(2)}</td>
                    <td class="px-4 py-2 border-b text-right text-gray-800">$${itemAmount.toFixed(2)}</td>
                `;

                tableBody.appendChild(row);

                // Update total amount
                totalAmountEl.textContent = `$${(totalAmount + deliveryFee).toFixed(2)}`;

                // Clear input fields
                document.getElementById('item-name').value = '';
                document.getElementById('item-qty').value = '';
                document.getElementById('item-price').value = '';
            });
        });
    </script>
</body>
</html>