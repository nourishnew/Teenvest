import { prisma } from "./prismadb";

export async function createUser(
	firstName: string | null,
	lastName: string | null,
	userId: string | null,
	emailAddress: string | null,
	phoneNumber: string | null
) {
	try {
		// Create a new parent record in the database
		const newParent = await prisma.parent.create({
			data: {
				firstName,
				lastName,
				userId,
				emailAddress,
				phoneNumber,
			},
		});

		console.log("Parent saved successfully:", newParent);
		return newParent;
	} catch (error) {
		console.error("Error saving parent:", error);
		throw error;
	} finally {
		// Close the Prisma Client connection
		await prisma.$disconnect();
	}
}

export async function createChild(
	name: string,
	age: number,
	pin: number,
	parentUserId: string
) {
	try {
		// Find the parent using the userId
		const parent = await prisma.parent.findUnique({
			where: { userId: parentUserId },
		});

		if (!parent) {
			throw new Error(`Parent with userId ${parentUserId} not found.`);
		}

		// Create the child record with the parent's id
		const newChild = await prisma.child.create({
			data: {
				name,
				age,
				pin,
				parentId: parent.id, // Use the parent's id
			},
		});

		console.log("Child created successfully:", newChild);
		return newChild;
	} catch (error) {
		console.error("Error creating child:", error);
		throw error;
	} finally {
		// Close the Prisma Client connection
		await prisma.$disconnect();
	}
}

/**
 * Fetch all children of a parent using the parent's userId.
 * @param {string} userId - The userId of the parent.
 * @returns {Promise<Array>} - An array of children objects.
 */
export async function fetchAllChildrenByParentUserId(userId: string) {
	try {
		// Fetch the parent and their children
		const parentWithChildren = await prisma.parent.findUnique({
			where: { userId },
			include: {
				children: true, // Include the related children in the result
			},
		});

		if (!parentWithChildren) {
			throw new Error(`Parent with userId ${userId} not found.`);
		}

		return parentWithChildren.children;
	} catch (error) {
		console.error("Error fetching children:");
		throw error; // Rethrow the error for the calling function to handle
	} finally {
		await prisma.$disconnect(); // Ensure the Prisma client is disconnected after the query
	}
}
